/**
 * Converts `funcOrValue` to a string which can be used in generated code.
 */
export function codify(obj) {
    return JSON.stringify(obj);
}
export function rawString(str) {
    return `'${str}'`;
}
/**
 * Combine the strings of generated code into a single interpolated string.
 * Each element of `vals` is expected to be a string literal or a codegen'd
 * call to a method returning a string.
 */
export function combineGeneratedStrings(vals) {
    return vals.join(' + ');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZWdlbl9mYWNhZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbmd1bGFyMi9zcmMvY29yZS9jaGFuZ2VfZGV0ZWN0aW9uL2NvZGVnZW5fZmFjYWRlLnRzIl0sIm5hbWVzIjpbImNvZGlmeSIsInJhd1N0cmluZyIsImNvbWJpbmVHZW5lcmF0ZWRTdHJpbmdzIl0sIm1hcHBpbmdzIjoiQUFDQTs7R0FFRztBQUNILHVCQUF1QixHQUFRO0lBQzdCQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtBQUM3QkEsQ0FBQ0E7QUFFRCwwQkFBMEIsR0FBVztJQUNuQ0MsTUFBTUEsQ0FBQ0EsSUFBSUEsR0FBR0EsR0FBR0EsQ0FBQ0E7QUFDcEJBLENBQUNBO0FBRUQ7Ozs7R0FJRztBQUNILHdDQUF3QyxJQUFjO0lBQ3BEQyxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtBQUMxQkEsQ0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qKlxuICogQ29udmVydHMgYGZ1bmNPclZhbHVlYCB0byBhIHN0cmluZyB3aGljaCBjYW4gYmUgdXNlZCBpbiBnZW5lcmF0ZWQgY29kZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvZGlmeShvYmo6IGFueSk6IHN0cmluZyB7XG4gIHJldHVybiBKU09OLnN0cmluZ2lmeShvYmopO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmF3U3RyaW5nKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGAnJHtzdHJ9J2A7XG59XG5cbi8qKlxuICogQ29tYmluZSB0aGUgc3RyaW5ncyBvZiBnZW5lcmF0ZWQgY29kZSBpbnRvIGEgc2luZ2xlIGludGVycG9sYXRlZCBzdHJpbmcuXG4gKiBFYWNoIGVsZW1lbnQgb2YgYHZhbHNgIGlzIGV4cGVjdGVkIHRvIGJlIGEgc3RyaW5nIGxpdGVyYWwgb3IgYSBjb2RlZ2VuJ2RcbiAqIGNhbGwgdG8gYSBtZXRob2QgcmV0dXJuaW5nIGEgc3RyaW5nLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tYmluZUdlbmVyYXRlZFN0cmluZ3ModmFsczogc3RyaW5nW10pOiBzdHJpbmcge1xuICByZXR1cm4gdmFscy5qb2luKCcgKyAnKTtcbn1cbiJdfQ==