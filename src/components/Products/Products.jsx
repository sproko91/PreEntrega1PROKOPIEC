const products = [
    { 
        id: "1",
        category: "Velas",
        name: "Hera",
        capacity: "200 ml",
        img: "../../../public/assets/velas/hera.jpeg",
        stock: 100,
        price: "$ 2.600"
    },    
    { 
        id: "2",
        category: "Velas",
        name: "Hera Petit",
        capacity: "50 ml",
        img: "../../../public/assets/velas/hera-petit.jpeg",
        stock: 100,
        price: "$ 1.900"
    },       
    { 
        id: "3",
        category: "Velas",
        name: "Godai",
        capacity: "150 ml",
        img: "../../../public/assets/velas/godai.jpeg",
        stock: 100,
        price: "$ 3.100"
    },
    { 
        id: "4",
        category: "Velas",
        name: "Elizabeth",
        capacity: "200 ml",
        img: "../../../public/assets/velas/elizabeth.jpeg",
        stock: 100,
        price: "$ 4.150"
    },        
    { 
        id: "5",
        category: "Velas",
        name: "Elizabeth Dior",
        capacity: "200 ml",
        img: "../../../public/assets/velas/elizabeth-dior.jpeg",
        stock: 100,
        price: "$ 4.350"
    },        
    { 
        id: "6",
        category: "Velas",
        name: "Edessa",
        capacity: "150 ml",
        img: "../../../public/assets/velas/edessa.jpeg",
        stock: 100,
        price: "$ 2.250"
    },        
    { 
        id: "7",
        category: "Velas",
        name: "Helena",
        capacity: "150 ml",
        img: "../../../public/assets/velas/helena.jpeg",
        stock: 100,
        price: "$ 2.250"
    },    
    { 
        id: "8",
        category: "Velas",
        name: "Catania",
        capacity: "150 ml",
        img: "../../../public/assets/velas/catania.jpeg",
        stock: 100,
        price: "$ 1.450"
    },
    { 
        id: "9",
        category: "Difusores",
        name: "Baco",
        capacity: "200 ml",
        img: "../../../public/assets/difusores/baco.jpeg",
        stock: 100,
        price: "$ 2.800"
    },    
    { 
        id: "10",
        category: "Difusores",
        name: "Medea",
        capacity: "125 ml",
        img: "../../../public/assets/difusores/medea.jpeg",
        stock: 100,
        price: "$ 2.000"
    },
    { 
        id: "11",
        category: "Difusores",
        name: "Baco",
        capacity: "200 ml",
        img: "../../../public/assets/difusores/baco.jpeg",
        stock: 100,
        price: "$ 2.800"
    },
    { 
        id: "12",
        category: "Difusores",
        name: "Medea",
        capacity: "125 ml",
        img: "../../../public/assets/difusores/medea.jpeg",
        stock: 100,
        price: "$ 2.000"
    }    
]
   
export const getProducts = () => {
    
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(products)
        },2000)    
    })
}

export const getProductById = (productId) => {
        return new Promise((resolve) => {
            setTimeout(()=>{
            resolve(products.find(prod => prod.id === productId))},2000)
            }            
        )    
    }   

    export const getProductByCategory = (productCategory) => {
        return new Promise((resolve) => {
            setTimeout(()=>{
            resolve(products.filter(prod=> prod.category === productCategory))
        },2000)
            }            
        )    
    }   

