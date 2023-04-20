'use strict'

class card extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadow.appendChild(this.component())
        this.shadow.appendChild(this.styles())
    }

    styles() {
        const css = document.createElement('style')
        css.textContent = `
            *{
                padding:0;
                margin:0;
                box-sizing:border-box;
            }

            .card{
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                gap: 12px;
                border: 1px solid #ddd;
                border-radius: 5px;
                box-shadow: 0px 0px 8px #0006;
                padding: 10px;
                cursor: pointer;
            }

            .card:hover {
                box-shadow: 0px 0px 8px #05f6;
            }

            .card__image {
                width: 200px;
                height: 200px;
                object-fit: contain;
            }
        `
        return css
    }

    component() {
        const card = document.createElement('div')
        card.classList.add('card')

        const imagem = document.createElement('div')
        imagem.classList.add('card_image')

        const nome = document.createElement('div')
        nome.classList.add('card__name')

        const descricao = document.createElement('div')
        descricao.classList.add('card__description')

        const preco = document.createElement('div')
        preco.classList.add('card__price')

        card.append(imagem,nome,descricao,preco)

        return card
    }
}

customElements.define('card-produto', card)
