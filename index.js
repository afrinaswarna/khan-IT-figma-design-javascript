

const displayServices = () => {
    const services = [
    {"id":1,
       "image":"https://i.ibb.co.com/KczfV9Nt/Group.png",
       "title":"SEO Service",
       "subtitle":"Improve Google rankings and gain consistent, long-term traffic"
    },
    {"id":2,
       "image":"https://i.ibb.co.com/gMm211NS/Group-1.png",
       "title":"Web Design",
       "subtitle":"Create websites that convert visitors into customers."
    },
    {"id":3,
       "image":"https://i.ibb.co.com/jZGGTR6p/Group-2.png",
       "title":"Facebook Ads",
       "subtitle":"Connect with your target audience on their preferred platforms."
    },
    {"id":4,
       "image":"https://i.ibb.co.com/dwkHPRvG/Group-3.png",
       "title":"Google Ads",
       "subtitle":"Reach customers actively searching for your services."
    },
    {"id":5,
       "image":"https://i.ibb.co.com/99q9wHBK/Group-4.png",
       "title":"Content Writing",
       "subtitle":"Build trust and improve Google rankings with compelling content."
    },
    {"id":6,
       "image":"https://i.ibb.co.com/1GbDYJ1n/Group-5.png",
       "title":"Branding",
       "subtitle":"Differentiate your business and build customer loyalty."
    },
    {"id":7,
       "image":"https://i.ibb.co.com/HLLxHZFN/Group-6.png",
       "title":"Ul/UX Design",
       "subtitle":"Design user experiences that increase Conversions."
    },
    {"id":8,
       "image":"https://i.ibb.co.com/q3wzfkDp/Group-7.png",
       "title":"Graphic Design",
       "subtitle":"Develop professional visuals to enhance trust and credibility."
    }
]
  const servicesContainer = document.getElementById("services-container");
  servicesContainer.innerHTML = "";
  services.forEach((service) => {
    console.log(service)
    const serviceDiv = document.createElement("div");
    serviceDiv.innerHTML = `
     <div class='border border-[#E8EAED] hover:border-[#0271E8] hover:bg-[#F0F7FF] rounded-[20px] p-6'>
                    <img src=${service.image} alt="" class='size-14 object-cover'/>
                    <h4 class='font-semibold text-2xl inter-font mt-3 mb-2'>${service.title}</h4>
                    <p class='text-[16px] text-secondary'>${service.subtitle}</p>
                </div>
    `;
    servicesContainer.appendChild(serviceDiv);
  });


  return;
};
displayServices()