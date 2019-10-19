  function calculateS( u,  v,  a,  t) {
      if (u == null) return v * t - 0.5 * a * t * t;
      if (v == null) return u * t + 0.5 * a * t * t;
      if (a == null) return 0.5 * (u + v) * t;
      if (t == null) return (v * v - u * u) / (2 * a);

      return 0.5 * (u + v) * t;
  }

  function calculateU( s, v,  a,  t) {
      if (s == null) return v - a * t;
      if (v == null) return (s - 0.5 * a * t * t) / t;
      if (a == null) return (2 * s / t) - v;
      if (t == null) return sqrt(v * v - 2 * a * s);

      return v - a * t;
  }

  function calculateV( s,  u,  a,  t) {
      if (s == null) return u + a * t;
      if (u == null) return (s + 0.5 * a * t * t) / t;
      if (a == null) return (2 * s / t) - u;
      if (t == null) return Math.sqrt(u * u + 2 * a * s);

      return u + a * t;
  }

  function calculateA( s,  u,  v,  t) {
      if (s == null) return (v - u) / t;
      if (u == null) return 2 * (v * t - s) / (t * t);
      if (v == null) return 2 * (u * t + s) / (t * t);
      if (t == null) return (v * v - u * u) / (2 * s);

      return (v - u) / t;
  }

  function calculateT( s,  u,  v,  a) {
      if (s == null) return (v - u) / a;
      if (u == null) {
          const results = quadraticFormula(0.5 * a, -v, s);
          if (results[0] <= 0) return results[1];
          if (results[1] <= 0) return results[0];

          return Math.max(results[0], results[1]);
      }
      if (v == null) {
          const results = quadraticFormula(0.5 * a, u, -s);
          if (results[0] <= 0) return results[1];
          if (results[1] <= 0) return results[0];

          return Math.max(results[0], results[1]);
      }
      if (a == null) return 2 * s / (u + v);

      return (v - u) / a;
  }

  function quadraticFormula(a, b, c) {
    const answerOne = ( -b + Math.sqrt(b * b - 4 * a * c) ) / (2 * a);
    const answerTwo = ( -b - Math.sqrt(b * b - 4 * a * c)) / (2 * a);

    return [answerOne, answerTwo];
}