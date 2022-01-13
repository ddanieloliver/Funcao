function makeAdder(x) {
    // parâmetro `x` é uma variável interna

    // função interna `add()` usa `x`, então
    // ele tem uma "clausura" que o envolve
    function add(y) {
        return y + x;
    };

    return add;
}

// `plusOne` pega a referência para a função interna add(..)`
// função com clausura sobre o parâmetro `x` da
// função externa `makeAdder(..)`
var plusOne = makeAdder( 1 );

// `plusTen` pega a referência para a função interna `add(..)`
// função com clausura sobre o parâmetro `x` da
// função externa `makeAdder(..
var plusTen = makeAdder( 10 );

plusOne( 3 );       // 4  <-- 1 + 3
plusOne( 41 );      // 42 <-- 1 + 41

plusTen( 13 );      // 23 <-- 10 + 13
