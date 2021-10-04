const submit = document.querySelector('#submit')
const resultFee = document.querySelector('#result-fee')
const resultProfLoss = document.querySelector('#result-profLoss')
const discountText = document.querySelector('#result-porcent')
const discountTextResult = document.querySelector('#porcentDisplay')
const minProfit = 0.5

function discount(fabValue, porcent) {
  let recomendationValue = 0
  let realValue = 0

  while (realValue <= minProfit) {
    recomendationValue += 0.1
    let feeDiscount = (6.99 / 100) * recomendationValue + 0.39
    let discountedValue =
      recomendationValue - recomendationValue * (porcent / 100)
    realValue = discountedValue - feeDiscount - fabValue
    console.log(realValue, discountedValue, recomendationValue)
  }
  return recomendationValue
}

submit.addEventListener('click', function () {
  const fabValue = parseFloat(document.querySelector('#price-fab').value)
  const storeValue = parseFloat(document.querySelector('#price-store').value)
  const discountValue = parseFloat(document.querySelector('#porcent').value)
  const fee = (6.99 / 100) * storeValue + 0.39
  const liquidValue = storeValue - fee - fabValue
  const recomendPrice = discount(fabValue, discountValue)

  resultFee.innerHTML = fee
  resultProfLoss.innerHTML = liquidValue
  discountText.innerHTML = `O Valor Recomendado pra um desconto de ${discountValue}%`
  discountTextResult.innerHTML = recomendPrice
})
