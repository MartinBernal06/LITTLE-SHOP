export class HeaderComponent extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		const shadow = this.attachShadow({ mode: "open" });
		this.#addStyles(shadow);
		this.#render(shadow);
	}

	#render(shadow) {
		shadow.innerHTML += `
		<header>
			<div class="header-content">
				<h1>LITTLE SHOP</h1>
				<nav>
					<ul>
						<li><a href="/index.html">HOME</a></li>
					</ul>
				</nav>
				<nav>
					<ul>
						<li><a href="/index2.html">Index 2</a></li>
					</ul>
				</nav>
			</div>
		</header>
	  `;
	}

	#addStyles(shadow) {
		let link = document.createElement("link");
		link.setAttribute("rel", "stylesheet");
		link.setAttribute("href", "./src/components/header/header.component.css");
		shadow.appendChild(link);
	}
}