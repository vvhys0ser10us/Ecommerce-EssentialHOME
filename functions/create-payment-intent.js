const dotenv = require('dotenv')
dotenv.config()
const stripe = require('stripe')(
  'sk_test_51Mdn8DIEHmLIQL55YWA7kC4aBBbj7XU9KKlirWozTebbMpGZHTreDjnkqqWqH7gs88De8aSObW47Frd1zCkHTIdT00rJDp3HF9'
)
exports.handler = async function (event, context) {
  const { cart, shipping, total_price } = JSON.parse(event.body)

  const calculateOrderAmount = () => {
    // Replace this constant with a calculation of the order's amount
    // Calculate the order total on the server to prevent
    // people from directly manipulating the amount on the client
    return shipping + total_price
  }
  try {
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(),
      currency: 'cad',
    })
    return {
      statusCode: 200,
      body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    }
  }
}
