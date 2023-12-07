/*
const template = document.createElement("template")
template.innerHTML = `
  <button
    slot="prev-btn"
    type="button"
    class="r-slideshow_prev-btn inline-block mr-4 rotate-90 align-super"
    name="previous"
    aria-label="{{ 'sections.announcements.previous_announcement' | t }}"
    aria-controls="Slider-{{ section.id }}"
  >
    > ${this.prevclass}
  </button>

  <div
    slot="content"
    class="content inline-block"
    id="Slider-{{ section.id }}"
    aria-live="polite"
    aria-atomic="true"
    data-autoplay="{{ section.settings.auto_rotate }}"
    data-speed="{{ section.settings.change_slides_speed }}"
  >
    content
  </div>

  <button
    slot="next-btn"
    type="button"
    class="r-slideshow_next-btn inline-block ml-4 -rotate-90 align-super"
    name="next"
    aria-label="{{ 'sections.announcements.next_announcement' | t }}"
    aria-controls="Slider-{{ section.id }}"
  >
    >
  </button>
`
*/

class RSlideshow extends HTMLElement {
  constructor() {
    super()
    // instances

    // props
    this.prevclass = ''


    // attributes


    // inits


    // events
    this.kirbytest = this.querySelector('.kirbytest')
    
    //this.nextBtn = this.querySelector('.r-slideshow_next-btn')
  }

  static get observedAttributes() {
    return ['prevclass']
  }

  attributeChangedCallback(property, oldval, newval) {
    if (oldval === newval) return
    this[property] = newval
  }

  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' })
    //shadow.append(template.content.cloneNode(true))
    shadow.innerHTML = this.template()

    console.log('kirbytest - ', this.kirbytest)
    //console.log(this.prevBtn)
    this.prevBtn = this.querySelector('.r-slideshow_prev-btn')
    console.log(this.prevBtn)

    /*
      NOTE:
      look into how to bind events in shadow dom
    */
    if (!this.prevBtn) return
    console.log('asd', this.prevBtn)
    this.prevBtn.addEventListener('click', this.prevClick)
    
    /*
    this.nextBtn.addEventListener('click', (e) => {
      console.log(e.target)
    })
    */
  }

  prevClick() {
    console.log('prev click test')
  }

  template() {
    return `
      <style>
        button,
        .content {
          display: inline-block;
        }
        button {
          background: none;
          border: none;
          cursor: pointer;
        }
      </style>

      <button
        type="button"
        class="r-slideshow_prev-btn"
        name="previous"
        aria-label="{{ 'sections.announcements.previous_announcement' | t }}"
        aria-controls="Slider-{{ section.id }}"
      >
        <slot name="prev-btn"></slot>
      </button>

      <div
        class="content inline-block"
        id="Slider-{{ section.id }}"
        aria-live="polite"
        aria-atomic="true"
        data-autoplay="{{ section.settings.auto_rotate }}"
        data-speed="{{ section.settings.change_slides_speed }}"
      >
        <slot name="content"></slot>
      </div>

      <button
        type="button"
        class="r-slideshow_next-btn"
        name="next"
        aria-label="{{ 'sections.announcements.next_announcement' | t }}"
        aria-controls="Slider-{{ section.id }}"
      >
        <slot name="next-btn"></slot>
      </button>
    `
  }
}
if (!customElements.get('r-slideshow')) {
  customElements.define('r-slideshow', RSlideshow)
}

/*
class HelloWorld extends HTMLElement {
  constructor() {
    super()
    this.name = 'helllo'
    this.last = 'another test'
  }

  static get observedAttributes() {
    return ['name', 'last']
  }

  attributeChangedCallback(property, oldval, newval) {
    if (oldval === newval) return
    this[property] = newval
  }

  // connect component
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'closed' })
    
    shadow.innerHTML = `
      <style>
        .testing {
          color: red;
        }
      </style>

      <p class="testing">
        ${this.name} - ${this.last}
      </p>

      <p>testing hello world outside style and font</p>
    `

    //this.textContent = `${this.name} = ${this.last}`
    //console.log('Hello World - connectedCallback()')
  }

}
customElements.define( 'hello-world', HelloWorld );
*/