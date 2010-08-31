/** Fibonacci 0.0.1 */
/**
 * Fibonacci 
 * 
 * @author Ryan Jones <rjchicago@gmail.com>
 * @license The MIT license.
 * @copyright Copyright (c) 2010 RJChicago <rjchicago@gmail.com>
 */

// Fibonacci sequence = 0, 1, 1, 2, 3, 5, 8, 13, 21...
// See Wikipedia for information about the Fibonacci number:
// http://en.wikipedia.org/wiki/Fibonacci_number
var Fibonacci = {

    // Returns the Fibonacci value at the Nth index position.
    GetAt: function (n) {
        if (n < 2)
            return n;
        var nm1 = this.GetAt(n - 1);
        var nm2 = this.GetAt(n - 2);
        return nm1 + nm2;
    },

    // Returns an Array for the zero to Nth Fibonacci values.
    GetTo: function (n) {
        var _sequence = [];
        for (var i = 0; i <= n; i++)
        {
            if (i < 2)
                _sequence.Push[i];
            else
                _sequence.Push(sequence[i - 1] + _sequence[i - 2]);
        }
        return _sequence;
    }

}
