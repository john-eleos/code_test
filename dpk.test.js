
const {deterministicPartitionKey} = require("./dpk");


describe("deterministicPartitionKey", () => {
    test('does it return the literal 0 when given no input',()=>{
        const key = deterministicPartitionKey();
        expect(key).toBe("0");
    })

    test('returns the string of the same value when sent as an object with partitionKey field',()=>{
        const data = {partitionKey:2819839};
        const key = deterministicPartitionKey(data);
        expect(key).toBe(data.partitionKey.toString());
    })

    test('returns the encrypted value when string/number is sent not as an object',()=>{
        const data = "287329";
        const key = deterministicPartitionKey(data);
        expect(key).not.toBe(data);
    })

    test('should always return a string',()=>{
        const data = {partitionKey:2819839};
        const key = deterministicPartitionKey(data);
        expect(typeof key).toBe('string');
    })

    test('length must always be less than 256',()=>{
        const data = 2819839;
        const key = deterministicPartitionKey(data);
        expect(key.length).toBeLessThan(256);

    })
  });
  