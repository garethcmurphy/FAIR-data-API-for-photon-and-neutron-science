
# FAIR Data API for Photon and Neutron Science 🌟🔬  
[![LoopBack](https://github.com/strongloop/loopback-next/raw/master/docs/site/imgs/branding/Powered-by-LoopBack-Badge-(blue)-@2x.png)](http://loopback.io/)



This repository provides a FAIR (Findable, Accessible, Interoperable, Reusable) data API for photon and neutron science research. Built using **LoopBack** and **MongoDB**, this API is part of the **PaNOSC (Photon and Neutron Open Science Consortium)** initiative, ensuring compatibility across all 15 PaNOSC institutes.

---

## Features ✨  

- **FAIR-Compliant API**: Implements best practices for scientific data sharing.  
- **LoopBack Framework**: Streamlined REST API development.  
- **MongoDB Integration**: Efficient storage and querying of experimental data.  
- **Cross-Institute Compatibility**: Standardized for all PaNOSC facilities.  
- **Metadata Management**: Easily query and manage photon and neutron experimental data.  

---

## Prerequisites 🛠️  

- **Node.js** (16+ recommended).  
- **MongoDB** installed locally or accessible via a cloud provider.  

---

## Installation  

1. Clone the repository:  
git clone https://github.com/your-username/fair-data-api.git  
cd fair-data-api  

2. Install dependencies:  
npm install  

3. Configure MongoDB connection:  
Update the `datasources.json` file in the `server/` directory to include your MongoDB URI:  
```json
{
  "db": {
    "name": "db",
    "connector": "mongodb",
    "url": "mongodb://localhost:27017/fair_data"
  }
}
