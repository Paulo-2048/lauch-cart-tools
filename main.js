const submit = document.querySelector('#submit')
const resultFee = document.querySelector('#result-fee')
const resultProfLoss = document.querySelector('#result-profLoss')
const resultMaxDiscount = document.querySelector('#result-maxDiscount')

submit.addEventListener('click', function () {
  const fabValue = parseFloat(document.querySelector('#price-fab').value)
  const storeValue = parseFloat(document.querySelector('#price-store').value)
  const fee = (6.99 / 100) * storeValue + 0.39
  const liquidValue = storeValue - fee - fabValue

  resultFee.innerHTML = fee
  resultProfLoss.innerHTML = liquidValue

  // if (liquidValue < 0) {
  //   resultMaxDiscount.innerHTML = 'No Discount Aplicable'
  // } else {
  //   discout = 0
  //   liquidValueDiscount = liquidValue
  //   while (liquidValueDiscount >= 0) {
  //     liquidValueDiscount = liquidValue - (discout / 100) * liquidValue
  //     discout += 1
  //   }
  //   console.log(discout)
  //   resultMaxDiscount.innerHTML = `${discout} %`
  // }
})
