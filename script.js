'use-strict';

// order Form

const orderForm = document.getElementById('order-form');
const foodPortion = document.getElementById('portion');
const personName = document.getElementById('name');
const phoneNUmber = document.getElementById('phone-number');
const address = document.getElementById('address');

function handleSubmit(e) {
  e.preventDefault();
  const data = {
    portion: foodPortion.value,
    name: personName.value,
    phoneNumber: phoneNUmber.value,
    address: address.value,
  };

  const message = `Hello, I am ${data.name}. I want to order ${data.portion} portion(s) of Angwamo. Please contact me at ${data.phoneNumber} and deliver to ${data.address}.`;

  const encodedMessage = encodeURIComponent(message);

  const businessNumber = '233540396394';

  const whatsappURL = `https://wa.me/${businessNumber}?text=${encodedMessage}`;

  window.open(whatsappURL, '_blank');

  alert(
    `Thank you ${data.name} for your order of ${data.portion} portions. We will contact you at ${data.phoneNumber} and deliver to ${data.address}.`
  );
  orderForm.reset();
}

orderForm.addEventListener('submit', handleSubmit);
