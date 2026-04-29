async function carregarProdutos() {
    const container = document.getElementById("produtos");
    try {
      const resposta = await fetch("https://dummyjson.com/products");
      const dados = await resposta.json();

      dados.products.forEach((produto ) => {
        const card = `
    <div class="col mb-5">
        <div class="card h-100" style="background-color: #FAF9F6; border: none; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <img class="card-img-top" src="${produto.thumbnail}" alt="${produto.title}" />
            
            <div class="card-body p-4">
                <div class="text-center">
                    <h5 class="fw-bolder" style="color: #333333">${produto.title}</h5>
                    <span style="color: #B4C79F; font-weight: bold; font-size: 1.2rem;">
                        R$ ${produto.price}
                    </span>
                </div>
            </div>
            
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center">
                    <a class="btn mt-auto" href="#" 
                       style="background-color: #B4C79F; color: white; border-radius: 25px; padding: 8px 20px;">
                       Ver detalhes
                    </a>
                </div>
            </div>
        </div>
    </div>
    `;
    container.innerHTML += card;
});
     }

    catch (error) {
     console.error("Erro ao carregar todos os produtos:", error);
     container.innerHTML = "<p>Erro ao carregar os produtos. Por favor, tente novamente mais tarde.</p>"
    };
}
 
carregarProdutos()