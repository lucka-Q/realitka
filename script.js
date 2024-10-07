const apartment = {
    type: 'rent',
    disposition: '3+1',
    area: {
      floorage: 100,
      balcony: 2,
      units: 'sqm',
    },
    city: 'Prague',
    district: 'Old Town',
    price: {
      rent: 28000,
      fees: {
        water: 1000,
        energy: 2500,
        services: 560,
      },
      currency: 'czk',
    },
    ownership: 'personal',
    condition: 'renovated',
    status: 'free',
    floor: 3,
  };

  document.body.innerHTML += "<p> Dispozice bytu je " + apartment.disposition + "</p>"
  document.body.innerHTML += "<p> Čistý nájem bez poplatů je " + apartment.price.rent + apartment.price.currency + "</p>"
  document.body.innerHTML += "<p> Výměra bytu je " + apartment.area.floorage + apartment.area.units + " + balkonů: " + apartment.area.balcony + "</p>"

  const mesto = apartment.city
  const mestskaCast =apartment.district

  document.body.innerHTML += "<p> Byt je v " + mesto + " v městské části " + mestskaCast + "</p>"

  apartment.status = "taken"

  document.body.innerHTML += "<p> Byt je volný/obsazený: " + apartment.status + "</p>"
