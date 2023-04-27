function _createModal(options) {
  const modal = document.createElement('div')
  modal.classList.add('modal__win')
  modal.insertAdjacentHTML("afterbegin", `
              
                <div class="modal__overlay">
                  <div class="modal__container">
                    <div class="modal__header">
                      <div class="modal__tag">
                        Ваш отзыв о товаре
                      </div>
                    </div>
                    <div class="modal__body">
                      <label class="action__label text--left" for="fname">Имя</label>
                      <input class="input__modal-body" type="text" id="fname" name="firstname" placeholder="Ваше имя..">
                      <label class="action__label" for="lname">Фамилия</label>
                      <input class="input__modal-body" type="text" id="lname" name="lastname"
                        placeholder="Ваша фамилия..">
                      <label class="action__label" for="country">Страна</label>
                      <select id="country" name="country">
                        <option value="usa">Ла-ла Ленд</option>
                        <option value="australia">Австралия</option>
                        <option value="canada">Канада</option>
                        <option value="usa">США</option>
                      </select>
                      <label class="action__label" for="subject">Ваш отзыв</label>
                      <textarea id="subject" name="subject" placeholder="Oтзыв.." style="height:200px"></textarea>
                    </div>
                    <div class="modal__footer">
                      <input class="input__sbm" type="submit" value="Отправить" data-close="true">
                      <button class="input__sbm--close" data-close="true">Закрыть</button>
                    </div>
                  </div>
                </div>
              
    `)
  document.body.appendChild(modal)
  return modal
}




wMod.modal = function (options) {
  const $modal = _createModal(options)
  let closing = false
  let destroyed = false

  const modal = {
    open() {
      if (destroyed) {
        return console.log('Modal is destroyed')
      }
      $modal.classList.add('open')
    },
    close() {
      $modal.classList.remove('open')
    },
  }

  const Listener = event => {
    console.log('Clicked', event.target.dataset.close)
    if (event.target.dataset.close) {
      modal.close()
    }
  }

  $modal.addEventListener('click', Listener)

  return Object.assign(modal, {
    destroy() {
      $modal.parentNode.removeChild($modal)
      $modal.removeEventListener('click', Listener)
      destroyed = true
    }
  })
}

document.addEventListener('click', event => {
  event.preventDefault()
  const btnType = event.target.dataset.btn

  if (btnType === 'show') {
    modal.open()
  }
});