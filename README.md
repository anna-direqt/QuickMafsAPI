Name: Quick Mafs API

This API will take two fractions and an operator, and compute the result.

GET Endpoints:

/calc
   - Takes two fractions and an operator, and computes the result.
   - Please format your fractions like [integer]/[integer]. You may also insert
     just an integer.
   - Available operators:
       * Multiplication *
       * Division /
       * Addition + (Use %2B if you are typing directly in your browser)
       * Subtraction -
   - Query parameters:
       * frac1 - the first fraction
       * frac2 - the second fraction
       * oper - the operator
   - For example, the request /calc/?frac1=1/2&frac2=2/3&oper=* would perform 1/2 * 2/3.
   - Return format: {"frac1": "1/2", "frac2": "2/3", "operator": "*", "result": "1/3"}
   - NOTE: If you get a "result": "Could not complete", check that you didn't attempt
     to use the "+" character in your browser. (The URL encoding for "+" is %2B)
