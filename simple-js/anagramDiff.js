function anagramDiff(s, t) {
  var map = {},
    diff = 0,
    i, j;

  if (s.length !== t.length) {
    return -1;
  }

  for (i = 0; i < s.length; i++) {
    if (s[i] in map) {
      map[s[i]]++;
    } else {
      map[s[i]] = 1;
    }
  }


  for (j = 0; j < t.length; j++) {
    if (t[j] in map) {
      if (map[t[j]] === 0) {
        diff += 1;
      } else {
        map[t[j]] -= 1;
      }
    } else {
      diff += 1;
    }
  }

  return diff;
}
