// promise
// The Promise.any() method is one of the promise concurrency methods.
// This method is useful for returning the first promise that fulfills. It short-circuits after a promise fulfills,
// so it does not wait for the other promises to complete once it finds one.

// Unlike Promise.all(), which returns an array of fulfillment values, we only get one fulfillment value (assuming at least one promise fulfills).
// This can be beneficial if we need only one promise to fulfill but we do not care which one does. Note another difference: this method rejects upon receiving an empty iterable,
//  since, truthfully, the iterable contains no items that fulfill. You may compare Promise.any() and Promise.all() with Array.prototype.some() and Array.prototype.every().

// Also, unlike Promise.race(), which returns the first settled value (either fulfillment or rejection),
// this method returns the first fulfilled value. This method ignores all rejected promises up until the first promise that fulfills.

// promise.all -- if any fail all fail and if all pass then returns a promise.
// promise.race -- returns frst rejected or resolved
// promise.allSettled -- returns 0: {status: "fullfilled", value: 1234} 1: {status: "rejected", value: 2345}
// promise.any -- returns first fullfilled promise but if all fail then it will fail
