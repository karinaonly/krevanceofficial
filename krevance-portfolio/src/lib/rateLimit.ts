type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const rateLimitMap = new Map<string, RateLimitEntry>();

interface RateLimitOptions {
  limit: number;        // max requests
  windowMs: number;     // time window in milliseconds
}

export function rateLimit(
  identifier: string,
  options: RateLimitOptions = { limit: 3, windowMs: 60 * 60 * 1000 } // 3 per hour
) {
  const now = Date.now();
  const entry = rateLimitMap.get(identifier);

  // Reset if window expired
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(identifier, {
      count: 1,
      resetAt: now + options.windowMs,
    });
    return {
      success: true,
      remaining: options.limit - 1,
      resetAt: now + options.windowMs,
    };
  }

  // Block if limit reached
  if (entry.count >= options.limit) {
    return {
      success: false,
      remaining: 0,
      resetAt: entry.resetAt,
    };
  }

  // Increment count
  entry.count++;
  return {
    success: true,
    remaining: options.limit - entry.count,
    resetAt: entry.resetAt,
  };
}

// Cleanup old entries every 10 minutes
if (typeof setInterval !== 'undefined') {
  setInterval(() => {
    const now = Date.now();
    for (const [key, entry] of rateLimitMap.entries()) {
      if (now > entry.resetAt) rateLimitMap.delete(key);
    }
  }, 10 * 60 * 1000);
}