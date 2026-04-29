async function carregarProdutos() {
    const container = document.getElementById("produtos");
    try {
      const resposta = await fetch("https://dummyjson.com/products");
      const dados = await resposta.json();

      dados.products.forEach((produto ) => {
        const card = `
               <div class="col mb-5">
            <div class="card h-100">
              <!-- Product image-->
              <img
                class="card-img-top"
                src="${produto.thumbnail}"
                alt="${produto.title}"
              />
              <!-- Product details-->
              <div class="card-body p-4">
                <div class="text-center">
                  <!-- Product name-->
                  <h5 class="fw-bolder">${produto.title}</h5>
                  <!-- Product price-->
                  R$${produto.price}
                </div>
              </div>
              <!-- Product actions-->
              <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center">
                  <a class="btn btn-outline-dark mt-auto" href="#"
                    >Ver mais</a
                  >
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