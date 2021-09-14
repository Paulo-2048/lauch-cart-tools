const submit = document.querySelector('#submit')
const resultFee = document.querySelector('#result-fee')
const resultProfLoss = document.querySelector('#result-profLoss')
const discount50 = document.querySelector('#off50')
const minProfit = 0.50



function discount50Function (fabValue) {
  let recomendationValue = 0
  let realValue = 0
  
  while (realValue <= minProfit) {
    recomendationValue += 0.1
    let fee50Discount = (6.99 / 100) * recomendationValue + 0.39
    let discountedValue = recomendationValue - (recomendationValue * 0.5)
    realValue = discountedValue - fee50Discount - fabValue
    console.log(realValue, discountedValue, recomendationValue)
  }
  return recomendationValue
}


submit.addEventListener('click', function () {
  const fabValue = parseFloat(document.querySelector('#price-fab').value)
  const storeValue = parseFloat(document.querySelector('#price-store').value)
  const fee = (6.99 / 100) * storeValue + 0.39
  const liquidValue = storeValue - fee - fabValue
  const recomendPrice = discount50Function(fabValue, fee)

  resultFee.innerHTML = fee
  resultProfLoss.innerHTML = liquidValue
  discount50.innerHTML = recomendPrice

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
