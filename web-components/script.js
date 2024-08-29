class Card extends HTMLElement{
    constructor() {
        super()

        const shadow = this.attachShadow({ mode: 'open'})
        this.title = 'Hello'

        this.description = this.getAttribute('description')
        this.image = 'https://images.unsplash.com/photo-1690207925008-2ab494a360e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'

        const wrapper = document.createElement("div");
        wrapper.innerHTML = `
		<div class="card">
			<div class="image">
				<img src="${this.image}" alt="Image">
			</div>
			<div class="infos">
				<p class="title">${this.title}</span>
				<p class="description">${this.description}</span>
			</div>
		</div>
		`

        this.element = wrapper.firstElementChild;

        const style = document.createElement('style')
        style.textContent = this.style()

        this.event()

        shadow.appendChild(style)
        shadow.appendChild(this.element)
    }

    style(){
        return `
			body{
				font-family: Arial, sans-serif;
				margin:0;
				padding:0;
			}

			.card{
				padding:10px;
				width: 500px;
				display:flex;
				flex-direction: column;
				overflow: hidden;
				background: lightblue;
			}

			.image{
				width: 100%;
			}

			.image > img {
				width: 100%;
				height: 100%;
				object-fit: contain;
			}

			.infos{
				display: flex;
				flex-direction:column;
			}

			.title{
				font-weight: bold;
			}
		`
    }
    event(){
        this.element.addEventListener('click', ()=>{
            console.log(this.title, this.description)
        })
    }
}


customElements.define('card-element', Card)

