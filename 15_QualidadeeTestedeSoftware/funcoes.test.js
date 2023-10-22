const funcoes = require('./funcoes');

test('Dois mais dois deverá ser quatro',() => {
    expect( funcoes.somarDoisValores(2,2))
    .toBe(4);
});

test('Deve ser null', () => {
    expect( funcoes.sempreNulo())
    .toBeNull();
}
);

// códigos válidos: 100, 101, 500, 999
// códigos inválidos: -1, 5, 1000 etc

test('Código 100 deve ser permitido',() => {
    expect (funcoes.codigoValido(100))
    .toBeTruthy();
});
test('Código 101 deve ser permitido',() => {
    expect (funcoes.codigoValido(101))
    .toBeTruthy();
});

test('Código -1 não deve ser permitido',() => {
    expect (funcoes.codigoValido(-1)) //  expect (funcoes.codigoValido(-a))
    .toBeFalsy();
});

// Escrever o teste primeiramente
// Inverter string Java -> avaJ

test('Deve inverter uma string Java -. avaJ', () => {
    expect(funcoes.inverterString('Java'))
    .toEqual('avaJ');
});

// DANIAL -> LEINAD
// ANA -> ANA
// Jest -> tseJ

const casosInversaoStrings = [['DANIEL', 'LEINAD'], ['ANA', 'ANA'],['Jest', 'tseJ']];

describe('Inversao de String', () => {
    test.each(casosInversaoStrings)(
        'inversâo de %p -> %p',
        (original, inversaoEsperada) => {
            const resultado = funcoes.inverterString(original);
            expect(resultado).toEqual(inversaoEsperada);
        }
    )
});

// Não faremos o teste da função cobertura > 100%

// Teste de chamada de APIs
// jsonplaceholder.typicode.com
// Usando Promise

test('[Promise] Deve carregar o primeiro usuario de teste -> Leanne Graham',() => {
    expect.assertions(1); // por causa da chamada assincrona
    return funcoes.buscarUsuario1().then(dados => {
        expect(dados.name).toEqual('Leanne Graham')
        // expect(dados.name).toEqual('Leanne Grahamxxx') provoca erro <> nome site
    })
});

// Usando Async Await

test('[AsyncAwait] Deve carregar o primeiro usuario de teste -> Leanne Graham', async () => {
    expect.assertions(1); // por causa da chamada assincrona
    const dados = await funcoes.buscarUsuario1();
    expect(dados.name).toEqual('Leanne Graham');
        // expect(dados.name).toEqual('Leanne Grahamxxx') provoca erro <> nome site
});

