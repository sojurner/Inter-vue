var twoSum = function(nums, target) { 
  class HashTable {
    constructor(index) {
      this.index = index
      this.trie = {[nums[index]]: index, children: this.createHashTable(nums)}
    }

    createHashTable(arr){
      const mapped = nums.map((num, i)=> {
        return {[num]: i}
      })
     return mapped.filter((num,i) => this.index !== i)
    }
  }
  for(let i = 0; i < nums.length; i++){
  const x = new HashTable(i)
  if(x)
  }
};

twoSum([3,2,3], 6)

// https://repl.it/@sojurner/Two-Sum