function pegarId() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id')
}

async function carregarItem() {
    const id = pegarId()
    console.log("ID do produto:", id);

    if(!id) {
        document.body.innerHTML = "<h1>Produto não encontrado</h1>";
        return;
    }

    try{
        const resposta = await fetch(`https://dummyjson.com/products/${id}`);
        const produto = await resposta.json();
        console.log("Dados do produto:", produto);

        //preencher HTML
        document.querySelector(".card-img-top").src = produto.thumbnail;
        document.querySelector(".display-5").innerText = produto.description;
        document.querySelector(".lead").innerText = produto.description;
        document.querySelector(".fs-5 span:last-child").innerText = `$${produto.price}`;
        document.querySelector(".small").innerText = `SKU: ${produto.sku}`;
    }
    catch (error) {
        console.error ("Erro ao carregar o produto:", error);
        document.body.innerHTML = "<h1>Erro ao carregar o produto. Por favor, tente novamente mais tarde.</h1>";
    }
}
carregarItem()