# Refactoring

These are the changes i made

- first i confirmed that empty parameter returns '0' code exist immeditely

- converted the `partitionKey` toString() and then checked for it's lenght to see is less than `MAX_PARTITION_KEY_LENGTH` if not, i called the encode function then exist the function. because the only reason we had the `typeof candidate !== "string"` is because the `partitionKey` is not converted to string immediately it's pulled and i took the length check logic to the `if` block converting `partitionKey` to string because it's pretty much the only place that block is needed

