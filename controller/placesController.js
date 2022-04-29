const db = require('../models')

const Places = db.places;
//const publicPaces = require('./places');
const publicPaces = [
    {
      Id: "e36f3dd8-d86d-49de-815d-d434a99075f9",
      Name: "Lagos Ministry Of Energy And Mineral Resources",
      FullAddress: "Block 6, The Secretariat, Alausa, Ikeja",
      Latitude: null,
      Longitude: null,
      Description: null
    },
    {
      Id: "d6b690b3-d119-43cc-bb56-7b069a2e1151",
      Name: " Lagos State Government Secretariat",
      FullAddress: "Oregun, Ikeja",
      Latitude: null,
      Longitude: null,
      Description: null
    },
    {
      Id: "f1c34fd1-489c-43e4-8252-0b5ba804b4c3",
      Name: "Lagos State Ministry Of Science & Technology",
      FullAddress: "Secretariat Rd, Oregun, Ikeja",
      Latitude: null,
      Longitude: null,
      Description: null
    },
    {
      Id: "999a5501-bff6-4352-a355-f47ed93ec02f",
      Name: "Lagos State Ministry Of Special Duties",
      FullAddress: "Secretariat Rd, Alausa, Ikeja",
      Latitude: null,
      Longitude: null,
      Description: null
    },
    {
      Id: "da9eb47a-d6f6-4f03-b8fe-bbc1bed719d2",
      Name: "Lagos State Government Ministry Of Youth And Development",
      FullAddress: "Community Rd, Ifako-Ijaiye, Ojokoro",
      Latitude: null,
      Longitude: null,
      Description: null
    },
    {
      Id: "a30d5d56-cc64-4b96-9da5-a74fe6882b1a",
      Name: "Lagos State Ministry of Health",
      FullAddress: "Unity Road, Ikeja, Lagos",
      Latitude: null,
      Longitude: null,
      Description: null
    },
    {
      Id: "bd2e3990-28f2-4533-b6e1-342ae6461bd2",
      Name: "Lagos State Government Ministry Of The Environment",
      FullAddress: "Eko Onibaje, Olorunfunmi St, Lagos",
      Latitude: null,
      Longitude: null,
      Description: null
    },
    {
      Id: "4111a65a-d803-4cb3-93c0-06c3f5a2747f",
      Name: "Lagos State Ministry of Justice",
      FullAddress: "34 Allen Ave, Allen, Ikeja",
      Latitude: null,
      Longitude: null,
      Description: null
    },
    {
      Id: "a7dd2f46-4d02-48b4-a10c-caf05b8fa078",
      Name: " Lagos State Government Ministry Of Youth And Social Development",
      FullAddress: "11/13 Ojerinde Street, Idi-Araba, Mushin, Idi Oro, Lagos",
      Latitude: null,
      Longitude: null,
      Description: null
    },
    {
      Id: "70f4c251-008e-41fe-9aa5-e7f6a0499f1c",
      Name: "Federal Ministry of Internal Affairs",
      FullAddress: "Kingsway Road, Ikoyi, Lagos",
      Latitude: null,
      Longitude: null,
      Description: null
    },
    {
      Id: "d52fcd79-6686-4d0a-9582-64a8ace4470b",
      Name: "Federal Ministry of Information and Culture",
      FullAddress: "Herbert Macaulay Way, Garki, Lagos",
      Latitude: null,
      Longitude: null,
      Description: null
    },
    {
      Id: "5753a7b1-aee2-4364-ade3-20af6b727b1c",
      Name: "Federal Ministry of Commerce",
      FullAddress: "17a Awolowo Rd, Ikoyi, Lagos",
      Latitude: null,
      Longitude: null,
      Description: null
    },
    {
      Id: "267b79e9-ce68-4ac8-901c-9984981b98bc",
      Name: "Lagos State Ministry Of Justice Lagos Island",
      FullAddress: "18 King George V Rd, Lagos Island, Lagos",
      Latitude: null,
      Longitude: null,
      Description: null
    },
    {
      Id: "e2bdccad-efb3-43ef-9f93-2e5b2759ef7c",
      Name: "Lagos State Ministry of Works and Infrastructure Ikeja",
      FullAddress: " Lagos State Secretariat, Alausa, Ikeja",
      Latitude: null,
      Longitude: null,
      Description: null
    },
    {
      Id: "379ff3fa-836d-43ec-a1ac-fce1a1fcb683",
      Name: "Ministry Of Transportation - Lagos State Government",
      FullAddress: "Oregun Road, Kudirat Abiola Way, Ojota, Lagos",
      Latitude: null,
      Longitude: null,
      Description: ""
    },
    {
      Id: "ede12128-943f-464b-8174-189851a757c1",
      Name: "Ministry of Education, Lagos State Government Secretariat",
      FullAddress: "Alausa, Ojodu",
      Latitude: null,
      Longitude: null,
      Description: null
    },
    {
      Id: "34dcc84c-1436-46bb-a92d-bfa59ce647e8",
      Name: "Ministry of Physical Planning and Urban Development",
      FullAddress: "Block 15, The Secretariat, Mobolaji Johnson Ave, Ikeja, Lagos",
      Latitude: 5678.765,
      Longitude: 98.876,
      Description: "Ministry"
    },
    {
      Id: "d6f0fbe2-5db8-43cd-b57a-b06acc7fb63a",
      Name: " Lagos State Ministry of Works and Infrastructure Ikeja",
      FullAddress: "Lagos State Secretariat, Alausa, Ikeja",
      Latitude: null,
      Longitude: null,
      Description: "Ministry"
    },
    {
      Id: "0cb006ac-cb89-4345-9dd1-164752e53a02",
      Name: "Lagos State Ministry Of Agriculture",
      FullAddress: "Secretariat Rd, Alausa, Ikeja",
      Latitude: null,
      Longitude: null,
      Description: "Ministry"
    },
    {
      Id: "d9930665-9eac-466c-a674-584ebe4d8a4c",
      Name: "Lagos State Government, Ministry Of Youth And Social Development, Rehabilitation And Vocational Training Centre (Correctional Centre For Senior Boys)",
      FullAddress: "border bus stop, isheri, Olowora",
      Latitude: null,
      Longitude: null,
      Description: "Ministry"
    },
    {
      Id: "9332f00e-e951-4028-b1f1-b8ea424ab6c1",
      Name: "Ministry Of Youth And Social Development",
      FullAddress: "1 Lancaster Road, Onike 100001, Lagos",
      Latitude: null,
      Longitude: null,
      Description: "Federal Ministry"
    },
    {
      Id: "2dc35262-dc00-4b1c-a277-b284e6f3f252",
      Name: "Lagos State Ministry Of Finance",
      FullAddress: " 5 Awolowo Way, Oregun, Ikeja",
      Latitude: null,
      Longitude: null,
      Description: "Ministry"
    },
    {
      Id: "36ca0348-17df-4ae0-a744-4701dacd0cd4",
      Name: "Omega Fire Ministries Lagos State Western Regional Headquarters",
      FullAddress: "2/3 Kudirat Abiola Way, Oregun, Ikeja",
      Latitude: null,
      Longitude: null,
      Description: "Church"
    },
    {
      Id: "46ea9776-f3c1-47b6-9bef-625e62da2670",
      Name: "Federal Ministry Of Health Lagos Liaison Office",
      FullAddress: "443 Herbert Macaulay Way, Yaba 100001, Lagos",
      Latitude: null,
      Longitude: null,
      Description: "Federal Ministry"
    },
    {
      Id: "0c456699-9190-4601-b5db-83e59d8eea9a",
      Name: "God's Possibilty Ministries",
      FullAddress: "52 Alof St, Lagos Island, Lagos",
      Latitude: null,
      Longitude: null,
      Description: "Consultant"
    },
    {
      Id: "5f7cdcf0-0506-4bca-a094-9c99a76751bb",
      Name: "Ministry Of Lands",
      FullAddress: "Expressway1, Ikeja, Lagos",
      Latitude: null,
      Longitude: null,
      Description: "Ministry"
    },
    {
      Id: "33c644e5-8fe9-48fc-bc3d-90a5f49e221f",
      Name: " Ministry of Lands City",
      FullAddress: "Mobolaji Johnson Ave, Oregun, Lagos",
      Latitude: null,
      Longitude: null,
      Description: "Ministry"
    },
    {
      Id: "9cc13697-2824-43d3-a226-6dde68ae0a6c",
      Name: "Ministry Of Foreign Affairs",
      FullAddress: "15A Awolowo Rd, Ikoyi, Lagos",
      Latitude: null,
      Longitude: null,
      Description: "Ministry"
    },
    {
      Id: "0cd7c3a8-c8c4-41f2-adb2-aaceef49d4c1",
      Name: "Lagos State Examinations Board",
      FullAddress: "254, Ipaja Road by NYSC Orientation Camp, Agege, Lagos",
      Latitude: null,
      Longitude: null,
      Description: "Ministry"
    },
    {
      Id: "ea267604-30c8-4be1-86fc-6c94a972247a",
      Name: "Ministry of Youth, Sports and Social Devt",
      FullAddress: "Block 18, The Secretariat, Alausa, Ikeja",
      Latitude: null,
      Longitude: null,
      Description: "Ministry"
    },
    {
      Id: "00f5cd9b-e3a3-4673-b153-b7cc0ce10fd9",
      Name: "Port Health Services, FMOH",
      FullAddress: "Airport Rd, Mafoluku Oshodi, Lagos",
      Latitude: null,
      Longitude: null,
      Description: "Health"
    },
    {
      Id: "d4803d3f-9311-4359-bb81-eccf5ee2e6c0",
      Name: "Lagos State Physical Planning and Development Authority",
      FullAddress: "Off Oba Akinjobi Street, Opposite Uni Govt., Old Secretariat Rd, Ikeja",
      Latitude: null,
      Longitude: null,
      Description: "Ministry"
    },
    {
      Id: "ee58d3c6-d3bd-4ee4-974b-dc02be4d047d",
      Name: "Motor Vehicle Administration Agency, MVAA",
      FullAddress: "Ikeja GRA, Lagos",
      Latitude: null,
      Longitude: null,
      Description: "Ministry"
    },
    {
      Id: "69fecfe3-a504-437b-b86b-c05c5184b537",
      Name: "Ministry Of Waterfront Infrastructure Development.",
      FullAddress: "Block 10, second floor, The secretariat, Alausa, Ikeja",
      Latitude: null,
      Longitude: null,
      Description: "Ministry"
    },
    {
      Id: "bb820385-c52e-43c6-adfe-7c718695e257",
      Name: "Federal Ministry of Works, Old Tollgate, Ketu",
      FullAddress: "Ikosi Ketu, Lagos",
      Latitude: null,
      Longitude: null,
      Description: "Ministry"
    },
    {
      Id: "dee10edd-b251-4791-92ce-1f999911ff83",
      Name: "Nysc Secretariat",
      FullAddress: "Babs Animashaun Rd, Surulere, Lagos",
      Latitude: null,
      Longitude: null,
      Description: "Federal Ministry"
    },
    {
      Id: "8cea79dd-b6ab-4ec3-84bd-9b5875695671",
      Name: "Lagos State Secretariat - Alausa",
      FullAddress: "Obafemi Awolowo Way, Oregun, Ikeja",
      Latitude: null,
      Longitude: null,
      Description: "Ministry"
    },
    {
      Id: "6e799e4b-16e5-4d6b-8fbf-572f0c9fb114",
      Name: "Federal Ministry of Environnent",
      FullAddress: "Games Village, Bishop Owell, Surulere, Lagos",
      Latitude: null,
      Longitude: null,
      Description: "Federal Ministry"
    },
    {
      Id: "54b0d5bc-99c4-45f6-8156-ea94c78a4f37",
      Name: "Federal Ministry of Environnent",
      FullAddress: "Games Village, Bishop Owell, Surulere, Lagos",
      Latitude: null,
      Longitude: null,
      Description: "Federal Ministry"
    },
    {
      Id: "764390df-a3fc-4e68-afd0-3a576af66915",
      Name: "Federal Ministry Of Works And Housing",
      FullAddress: "Yaba 100001, Lagos",
      Latitude: null,
      Longitude: null,
      Description: "Federal Ministry"
    },
    {
      Id: "e205b625-9d09-491a-b5b7-043eb3e3a7f9",
      Name: "Federal Ministry of Trade and Commerce",
      FullAddress: "Anthony Ajayi St, Onike 100001, Lagos",
      Latitude: null,
      Longitude: null,
      Description: "Federal Ministry"
    },
    {
      Id: "92af339f-3277-4e87-ad0a-c509269f1192",
      Name: "Federal Ministry Of Employment",
      FullAddress: "5th Floor, Broad, 14 Broad St, Lagos Island, Lagos",
      Latitude: null,
      Longitude: null,
      Description: "Federal Ministry"
    },
    {
      Id: "8775fe46-05b6-46a2-a2c9-12348cd0e5fa",
      Name: "Federal Ministry of Trade and Investment - Produce Inspection, Weight & Measure, Federal Ministry of Trade and Investment - Produce Inspection, Weight & Measure, and ECCC",
      FullAddress: "Ijora Olopa, Lagos",
      Latitude: null,
      Longitude: null,
      Description: "Federal Ministry"
    },
    {
      Id: "1ff14b40-7ed2-4293-af23-bc92c53e40d4",
      Name: "Federal Ministry of Work",
      FullAddress: "Office Of Committee On Right Of Way, Otto Rd, Ijora, Lagos",
      Latitude: null,
      Longitude: null,
      Description: "Federal Ministry"
    },
    {
      Id: "b100cac5-50f2-49db-be6a-981f5c8d26bb",
      Name: "Federal Ministry of Housing and Development",
      FullAddress: "386Muritala Muhammed Way, Ikoyi, Lagos",
      Latitude: null,
      Longitude: null,
      Description: "Federal Ministry"
    },
    {
      Id: "ecaa6ec7-c51b-4a85-a3db-a6448151fcf1",
      Name: "Lagos state Emergency Management Agency (relief camp)",
      FullAddress: " Abule ijesha 100001, Lagos",
      Latitude: null,
      Longitude: null,
      Description: "Ministry"
    },
    {
      Id: "41951f9a-6c4c-485f-ad24-1c1976ed52b2",
      Name: "Lagos State Ministry Of Agriculture & Cooperatives - Forestry Department",
      FullAddress: "Orisunmibare Plank Market, Pen Cinema, 295 Old Abeokuta Motor Road, Lagos",
      Latitude: null,
      Longitude: null,
      Description: "Ministry"
    },
    {
      Id: "164c7094-5a1b-4c1e-bdb9-195553a9444f",
      Name: "NAFDAC Office Complex",
      FullAddress: "Plot 1, Industrial Estate, 22/132 Lagos- Oshodi Apapa Express Way, Isolo, Lagos",
      Latitude: null,
      Longitude: null,
      Description: "Federal Ministry"
    },
    {
      Id: "37a7fd63-5a11-442c-90d8-f2483f4097b2",
      Name: "LIRS Surulere Tax Office",
      FullAddress: "63 Adeniran Ogunsanya St, Surulere, Lagos",
      Latitude: null,
      Longitude: null,
      Description: "Ministry"
    },
    {
      Id: "85b5b75e-54f3-49b1-ae2c-8d29672df659",
      Name: "Federal Fire Service",
      FullAddress: "92 Clegg St, Yaba, Lagos",
      Latitude: null,
      Longitude: null,
      Description: "Ministry"
    },
    {
      Id: "28008b0c-6f18-4603-a876-ce6a57496ceb",
      Name: "Lagos State Health Service Commission",
      FullAddress: "2Ganiyu, Smith Road, Lagos Island, Lagos",
      Latitude: null,
      Longitude: null,
      Description: "Ministry"
    }
  ]
const addPlaces = async (req, res) => {
    // let model = {
    //     title:req.body.title,
    //     imageUrl:req.body.imageUrl,
    //     address:req.body.address,
    //     category:req.body.category,
    //     website:req.body.website,
    //     phoneNumber:req.body.phoneNumber,
    //     published:req.body.published ? req.body.published : false
    // }

    publicPaces.forEach(element => {
        let model = {
            title:element.Name,
            code:element.Id,
            imageUrl:'',
            address:element.FullAddress,
            category:element.Description,
            website:"",
            phoneNumber:"090",
            published:true
        }
         Places.create(model);
    });

    //const place = await Places.create(model);
    res.status(200).send("places");

    //console.log(place);
}

const getAllPlaces = async(req, res) =>{
    let places = await Places.findAll({});
    res.status(200).send(places);
}

const getAPlace = async(req, res) =>{
    let id = req.params.id;
    let place = await Places.findOne({where: {id: id}});
    res.status(200).send(place);
}

const getPlaceInCategory = async(req, res) =>{
    let category = req.body.category;
    console.log(category);
    let place = await Places.findAll({where: {category: category}});
    res.status(200).send(place);
}

//update
const updatePlace = async(req, res) =>{
    let id = req.params.id;
    let place = await Places.update(req.body,{where: {id: id}});
    res.status(200).send(place);
}


//delete
const deletePlace = async(req, res) =>{
    let id = req.params.id;
    await Places.destroy({where: {id: id}});
    res.status(200).send("place has been deletd");
}

module.exports = {
    addPlaces,
    getAPlace,
    getAllPlaces,
    getPlaceInCategory,
    updatePlace,
    deletePlace
}