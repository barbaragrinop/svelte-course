<script lang="ts">

</script>

{#snippet sum(a: number, b: number)}
    {#snippet bold(x: any)}
        <strong>{x}</strong>
    {/snippet}
    <span>{a} + {b} = {@render bold(a + b)}</span>
{/snippet}

<button>text</button>

{@render sum(2, 2)}

<!-- me explique para que servem os snippets -->
<!-- 
Snippets são trechos de código reutilizáveis que podem ser definidos uma vez e utilizados em vários lugares dentro do mesmo componente ou em diferentes componentes. Eles ajudam a evitar a repetição de código, 
tornando o código mais limpo e fácil de manter.
-->
<!-- mas qual a diferença de um snippet e de um componente? quais as vantagens dele? -->
<!-- 
A principal diferença entre um snippet e um componente é o escopo e a reutilização. 
Um componente é uma unidade independente que pode ter seu próprio estado, 
propriedades e lógica, e pode ser reutilizado em diferentes partes da aplicação 
ou até mesmo em diferentes projetos. 
Já um snippet é um trecho de código que é reutilizado dentro do
mesmo componente ou em componentes relacionados, mas não possui a mesma 
independência e encapsulamento que um componente.-->

<!-- então, o snippet é uma função? eu sou desenvolvedora react, então, não fica claro pra mim quando eu vou precisar usar um snippet -->
<!-- 
Sim, você pode pensar em snippets como funções que retornam trechos de código reutilizáveis. 
Eles são úteis quando você tem um pedaço de código que é usado várias vezes dentro do mesmo componente 
ou em componentes relacionados, mas não justifica a criação de um componente separado. 
Por exemplo, se você tem um trecho de código que formata uma data ou exibe um ícone específico, 
você pode criar um snippet para isso. 
Isso ajuda a manter o código mais organizado e evita a duplicação.
-->
<style>
    button {
        padding: 10px 20px;
        font-size: 16px;
        background-color: #007BFF;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    button:hover {
        background-color: #0056b3;
    }
</style>