import React from 'react'
let items = [
    {
        photo: "images/juice.webp",
        name: "5 18 Juice",
        rating: "⭐⭐⭐ 2.86",
        rate: "12.50 $",
        rate2: "20.50 $",
        detail: "Refreshing fruit juice, packed with vitamins and great for staying hydrated. Achieve dramatic lashes with this long- lasting and cruelty - free formula.It is important to take care of the patient, to be followed by the patient, but it will happen at such a time that there is a lot of work and pain.For to come to the smallest detail, no one should practice any kind of work unless he derives some benefit from it.Do not be angry with the pain in the reprimand in the pleasure he wants to be a hair from the pain in the hope that there is no breeding.Unless they are blinded by lust, they do not come forth; they are in fault who abandon their duties and soften their hearts, that is, their labors."
    },
    {
        photo: "images/apple.webp",
        name: "Apple",
        rating: "⭐⭐⭐ 3.58",
        rate: "8.25 $",
        rate2: "15.25 $",
        detail: "Fresh and crisp apples, perfect for snacking or incorporating into various recipes. Achieve dramatic lashes with this long- lasting and cruelty - free formula.It is important to take care of the patient, to be followed by the patient, but it will happen at such a time that there is a lot of work and pain.For to come to the smallest detail, no one should practice any kind of work unless he derives some benefit from it.Do not be angry with the pain in the reprimand in the pleasure he wants to be a hair from the pain in the hope that there is no breeding.Unless they are blinded by lust, they do not come forth; they are in fault who abandon their duties and soften their hearts, that is, their labors."
    },
    {
        photo: "images/pp.webp",
        name: "Protein Powder",
        rating: "⭐⭐⭐⭐ 4.5",
        rate: "14.56 $",
        rate2: "22.56 $",
        detail: "Nutrient-packed protein powder, ideal for supplementing your diet with essential proteins. Achieve dramatic lashes with this long- lasting and cruelty - free formula.It is important to take care of the patient, to be followed by the patient, but it will happen at such a time that there is a lot of work and pain.For to come to the smallest detail, no one should practice any kind of work unless he derives some benefit from it.Do not be angry with the pain in the reprimand in the pleasure he wants to be a hair from the pain in the hope that there is no breeding.Unless they are blinded by lust, they do not come forth; they are in fault who abandon their duties and soften their hearts, that is, their labors."
        
    },
    {
        photo: "images/oil.webp",
        name: "Cooking Oil",
        rating: "⭐⭐⭐⭐⭐ 5.0",
        rate: "15.32 $",
        rate2: "24.32 $",
        detail: "Versatile cooking oil suitable for frying, sautéing, and various culinary applications. Achieve dramatic lashes with this long- lasting and cruelty - free formula.It is important to take care of the patient, to be followed by the patient, but it will happen at such a time that there is a lot of work and pain.For to come to the smallest detail, no one should practice any kind of work unless he derives some benefit from it.Do not be angry with the pain in the reprimand in the pleasure he wants to be a hair from the pain in the hope that there is no breeding.Unless they are blinded by lust, they do not come forth; they are in fault who abandon their duties and soften their hearts, that is, their labors."
   
    },
    {
        photo: "images/f4.webp",
        name: "Strawberry",
        rating: "⭐⭐⭐⭐⭐ 5.0",
        rate: "110.50 $",
        rate2: "135.50 $",
        detail: "Sweet and succulent strawberries, great for snacking, desserts, or blending into smoothies. Achieve dramatic lashes with this long- lasting and cruelty - free formula.It is important to take care of the patient, to be followed by the patient, but it will happen at such a time that there is a lot of work and pain.For to come to the smallest detail, no one should practice any kind of work unless he derives some benefit from it.Do not be angry with the pain in the reprimand in the pleasure he wants to be a hair from the pain in the hope that there is no breeding.Unless they are blinded by lust, they do not come forth; they are in fault who abandon their duties and soften their hearts, that is, their labors."
   
    },
    {
        photo: "images/h1.webp",
        name: "Honey Jar",
        rating: "⭐⭐⭐ 2.6",
        rate: "20.55 $",
        rate2: "29.55 $",
        detail: "Pure and natural honey in a convenient jar, perfect for sweetening beverages or drizzling over food. Achieve dramatic lashes with this long- lasting and cruelty - free formula.It is important to take care of the patient, to be followed by the patient, but it will happen at such a time that there is a lot of work and pain.For to come to the smallest detail, no one should practice any kind of work unless he derives some benefit from it.Do not be angry with the pain in the reprimand in the pleasure he wants to be a hair from the pain in the hope that there is no breeding.Unless they are blinded by lust, they do not come forth; they are in fault who abandon their duties and soften their hearts, that is, their labors."
   
    },

    {
        photo: "images/h2.webp",
        name: "Nescafe Coffee",
        rating: "⭐⭐⭐⭐ 4.2",
        rate: "10.20 $",
        rate2: "16.20 $",
        detail: "Quality coffee from Nescafe, available in various blends for a rich and satisfying cup. Achieve dramatic lashes with this long- lasting and cruelty - free formula.It is important to take care of the patient, to be followed by the patient, but it will happen at such a time that there is a lot of work and pain.For to come to the smallest detail, no one should practice any kind of work unless he derives some benefit from it.Do not be angry with the pain in the reprimand in the pleasure he wants to be a hair from the pain in the hope that there is no breeding.Unless they are blinded by lust, they do not come forth; they are in fault who abandon their duties and soften their hearts, that is, their labors."
   
    }
    ,
    {
        photo: "images/h3.webp",
        name: "Soft Drinks",
        rating: "⭐⭐⭐ 3.1",
        rate: "7.50 $",
        rate2: "12.50 $",
        detail: "Assorted soft drinks in various flavors, perfect for refreshing beverages. Achieve dramatic lashes with this long- lasting and cruelty - free formula.It is important to take care of the patient, to be followed by the patient, but it will happen at such a time that there is a lot of work and pain.For to come to the smallest detail, no one should practice any kind of work unless he derives some benefit from it.Do not be angry with the pain in the reprimand in the pleasure he wants to be a hair from the pain in the hope that there is no breeding.Unless they are blinded by lust, they do not come forth; they are in fault who abandon their duties and soften their hearts, that is, their labors."
   
    },
     {
        photo: "images/juice.webp",
        name: "Juice",
        rating: "⭐⭐⭐ 2.86",
        rate: "12.50 $",
        rate2: "20.50 $",
        detail: "Refreshing fruit juice, packed with vitamins and great for staying hydrated. Achieve dramatic lashes with this long- lasting and cruelty - free formula.It is important to take care of the patient, to be followed by the patient, but it will happen at such a time that there is a lot of work and pain.For to come to the smallest detail, no one should practice any kind of work unless he derives some benefit from it.Do not be angry with the pain in the reprimand in the pleasure he wants to be a hair from the pain in the hope that there is no breeding.Unless they are blinded by lust, they do not come forth; they are in fault who abandon their duties and soften their hearts, that is, their labors."
    },
    {
        photo: "images/apple.webp",
        name: "Apple",
        rating: "⭐⭐⭐ 3.58",
        rate: "8.25 $",
        rate2: "15.25 $",
        detail: "Fresh and crisp apples, perfect for snacking or incorporating into various recipes. Achieve dramatic lashes with this long- lasting and cruelty - free formula.It is important to take care of the patient, to be followed by the patient, but it will happen at such a time that there is a lot of work and pain.For to come to the smallest detail, no one should practice any kind of work unless he derives some benefit from it.Do not be angry with the pain in the reprimand in the pleasure he wants to be a hair from the pain in the hope that there is no breeding.Unless they are blinded by lust, they do not come forth; they are in fault who abandon their duties and soften their hearts, that is, their labors."
    },
    {
        photo: "images/pp.webp",
        name: "Protein Powder",
        rating: "⭐⭐⭐⭐ 4.5",
        rate: "14.56 $",
        rate2: "22.56 $",
        detail: "Nutrient-packed protein powder, ideal for supplementing your diet with essential proteins. Achieve dramatic lashes with this long- lasting and cruelty - free formula.It is important to take care of the patient, to be followed by the patient, but it will happen at such a time that there is a lot of work and pain.For to come to the smallest detail, no one should practice any kind of work unless he derives some benefit from it.Do not be angry with the pain in the reprimand in the pleasure he wants to be a hair from the pain in the hope that there is no breeding.Unless they are blinded by lust, they do not come forth; they are in fault who abandon their duties and soften their hearts, that is, their labors."
        
    },
    {
        photo: "images/oil.webp",
        name: "Cooking Oil",
        rating: "⭐⭐⭐⭐⭐ 5.0",
        rate: "15.32 $",
        rate2: "24.32 $",
        detail: "Versatile cooking oil suitable for frying, sautéing, and various culinary applications. Achieve dramatic lashes with this long- lasting and cruelty - free formula.It is important to take care of the patient, to be followed by the patient, but it will happen at such a time that there is a lot of work and pain.For to come to the smallest detail, no one should practice any kind of work unless he derives some benefit from it.Do not be angry with the pain in the reprimand in the pleasure he wants to be a hair from the pain in the hope that there is no breeding.Unless they are blinded by lust, they do not come forth; they are in fault who abandon their duties and soften their hearts, that is, their labors."
   
    }
]


export default items

