### Hash Table

AKA: Hash, Hash Map, Unordered Map, Dictionary

> Known as Objects in JS

#### Definition:

Organizes data to look up values for a given key.

###### Strengths:

- Fast: average time is O(1)
- Flexible: Most data types can be used for keys

###### Weaknesses:

- Slow worst-case lookups:
  - O(n) time
- Unordered
- Single-directional lookups
  - Looking up keys for a given value requires an entire iteration
- Not cache-friendly
  - linked lists don't put data next to eachother in memory

###### Hash function:

- takes data and outputs a fixed-size string or number
- Can be seen as a fingerprint
- a given file will always have a same hash but can't go from has bakc to the original file
