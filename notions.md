
# permite fazer a chamada da api e devolver o resultado do Id para melhorar no SEO
export async function getServerSideProps(context) {

    const id = context.params.id;

    return {
        props: {
            id: id
        }
    }
}
# props? pega as props apra serem enjetadas nas paginas
# getStaticProps : 
   pegsa as props no processo de build   para gerar uma pagina estatica (roda uma vez na build)

# getServerSideProps: 
    Pega as props mas em tempo de execução no backend (roda em produção/quando einvocado)

# getStaticPaths : 
    Gera novas paginas estaticas assim que forem chamadas. 

# usar o fallback true com placeholder ou animação de carregando . 