/* =========================================================================
   PORTFOLIO CONTENT
   All site content lives here. Edit this file to update the website —
   no need to touch the HTML. The rest of the site renders from this data.
   ========================================================================= */

const PORTFOLIO = {

  /* ---------------------------------------------------------------- profile */
  profile: {
    name: "Md Mushfiqur Rahaman",
    shortName: "Mushfiq",
    tagline: "Ph.D. Student in Industrial Engineering (Data Science)",
    subtagline:
      "Edge AI · Model Quantization · Smart Manufacturing · Industry 4.0",
    location: "Morgantown, WV, USA",
    institution: "West Virginia University",
    department: "Department of Industrial and Management Systems Engineering",
    photo: "assets/img/profile.jpeg",
    resumeAcademic: "assets/docs/CV_Mushfiqur_Rahaman_Academic.pdf",
    resumeProfessional: "assets/docs/CV_Mushfiqur_Rahaman_Professional.pdf",
    about: [
      "I am a Ph.D. student in Industrial Engineering with a concentration in Data Science at West Virginia University. My research sits at the intersection of efficient deep learning and real-world manufacturing, focusing on real-time edge AI, post-training model quantization, and anomaly/defect detection in additive manufacturing and AI-enabled smart manufacturing systems.",
      "Before returning to academia, I spent more than six years leading industrial automation and Industry 4.0 initiatives in FMCG manufacturing at Unilever Bangladesh, Nestlé Bangladesh, and Unipolar Automation Technologies. That industry background — SCADA/PLC systems, OPC/SQL/Azure data pipelines, and plant digitalization — grounds my research in the practical realities of deploying AI on the factory floor.",
      "I hold an M.S. in Applied Mathematics from WVU and a B.Sc. in Electrical and Electronic Engineering from CUET. I enjoy building things that bridge the gap between resource-constrained edge hardware and the models that need to run on them."
    ]
  },

  /* ------------------------------------------------------------------ stats */
  stats: [
    { value: "6+", label: "Years in Industry 4.0" },
    { value: "5", label: "Peer-Reviewed Publications" },
    { value: "3", label: "Global FMCG / Automation Firms" },
    { value: "2", label: "Best Engineer & Director Awards" }
  ],

  /* --------------------------------------------------------------- contacts */
  contacts: {
    emailPrimary: "mr00131@mix.wvu.edu",
    emailSecondary: "mushfiq.r.shovon@gmail.com",
    phone: "+1 304 685 7615",
    linkedin: "https://www.linkedin.com/in/md-mushfiqur-rahaman-532506a7/",
    scholar: "https://scholar.google.com/citations?hl=en&user=BgRIA8cAAAAJ",
    orcid: "https://orcid.org/0009-0005-2418-817X",
    github: "https://github.com/" // <-- update with your GitHub username
  },

  /* ------------------------------------------------------- research focus */
  research: {
    intro:
      "My work centers on making modern deep learning models small, fast, and reliable enough to run on the edge — right next to the sensors and cameras in a factory or clinic.",
    interests: [
      {
        icon: "chip",
        title: "Edge AI & Efficient Inference",
        text: "Deploying machine learning models on resource-constrained devices such as Qualcomm RB3 Gen2 and Raspberry Pi with low latency and low power."
      },
      {
        icon: "compress",
        title: "Post-Training Quantization",
        text: "Model compression and low-bit inference using Brevitas, ONNX, and Qualcomm QNN/SNPE, studying calibration quality, class balance, and robustness."
      },
      {
        icon: "eye",
        title: "Computer Vision for Manufacturing",
        text: "Segment Anything Model (SAM) adaptation and XCT image segmentation for additive-manufacturing defect and pore inspection."
      },
      {
        icon: "factory",
        title: "Industrial IoT & Smart Manufacturing",
        text: "SCADA/PLC/OPC/SQL data acquisition, sensor forecasting, and anomaly detection for Industry 4.0 and digital-factory systems."
      }
    ],
    ongoing: [
      {
        title:
          "Edge deployment & quantization of foundation models for additive manufacturing inspection",
        text: "Domain adaptation and quantization of Segment Anything Model (SAM)-based segmentation models for XCT-based additive manufacturing defect and pore inspection, with deployment considerations for Qualcomm edge devices."
      },
      {
        title:
          "Post-training quantization of generative & discriminative LSTM text classifiers",
        text: "Quantizing neural-network text classifiers for edge deployment using Brevitas, with a focus on calibration quality, class balance, and robustness under low-bit quantization."
      }
    ]
  },

  /* --------------------------------------------------------------- education */
  education: [
    {
      school: "West Virginia University",
      location: "Morgantown, WV, USA",
      degree: "Ph.D. in Industrial Engineering — Concentration: Data Science",
      period: "Aug 2025 – Present (Expected Aug 2028)"
    },
    {
      school: "West Virginia University",
      location: "Morgantown, WV, USA",
      degree: "M.S. in Applied Mathematics",
      period: "Aug 2023 – Aug 2025"
    },
    {
      school: "Chittagong University of Engineering and Technology",
      location: "Chittagong, Bangladesh",
      degree: "B.Sc. in Electrical and Electronic Engineering",
      period: "2012 – Mar 2017"
    }
  ],

  /* -------------------------------------------------------------- experience */
  experience: [
    {
      role: "Research Assistant — Data Science",
      org: "School of Mathematical and Data Sciences, West Virginia University",
      location: "Morgantown, WV, USA",
      period: "2023 – Present",
      points: [
        "Research on post-training quantization of neural networks for efficient AI deployment on edge devices, including low-bit precision techniques and calibration methods.",
        "Working on domain adaptation and quantization of SAM-based segmentation models for additive-manufacturing defect inspection."
      ]
    },
    {
      role: "Manager — Electrical and Automation",
      org: "Unilever Bangladesh Ltd. (Kalurghat Factory)",
      location: "Chittagong, Bangladesh",
      period: "Mar 2020 – Jul 2023",
      points: [
        "Led Industry 4.0 and digital-factory implementation, including plant-level automation, electrical systems, utility monitoring, and cost optimization.",
        "Served as country-level Technical Assistance / Subject Matter Expert (TA3) for automation, instrumentation, electrical safety, and system design.",
        "Delivered energy monitoring, a Central Automation System (CAS) network backbone, an OPC/Azure Digital Factory Operating System (DFOS), SQL/SSRS statistical process control dashboards, and SCADA/SQL utility monitoring.",
        "Commissioned two European bottle-filling and packing lines during the COVID lockdown without OEM presence.",
        "Awarded ‘Best Engineer’ (2021) and the Supply Chain Director’s Award (2022) for talent development in control and instrumentation."
      ]
    },
    {
      role: "Officer — Electrical and Automation",
      org: "Nestlé Bangladesh Ltd.",
      location: "Gazipur, Bangladesh",
      period: "Dec 2018 – Feb 2020",
      points: [
        "Maintained electrical and automation systems in a noodle manufacturing plant and managed spare-parts planning for the lines.",
        "Commissioned FreeWeigh.Net Server (Mettler Toledo), WIPOTEC-OCS checkweigher, and TOPAC vertical filling & wrapping machine; delivered oil-cooling-system automation."
      ]
    },
    {
      role: "Project Engineer",
      org: "Unipolar Automation Technologies (System Integrator of Rockwell Automation)",
      location: "Dhaka, Bangladesh",
      period: "Mar 2017 – Dec 2018",
      points: [
        "Designed industrial control & instrumentation systems, prepared bills of materials, and performed installation and commissioning.",
        "Led PLC lab setup & training at CUET, resin-plant automation at Berger Paints, 132 kV/33 kV substation SCADA at KYCR Steel Mill, ACB interlock design at Nestlé Sreepur, and pump-station automation for Dhaka WASA."
      ]
    }
  ],

  /* --------------------------------------------------------------- projects */
  projects: [
    {
      title: "SAM Quantization for AM Defect Inspection",
      category: "Research",
      text: "Domain adaptation and low-bit quantization of Segment Anything Model (SAM) for XCT-based additive-manufacturing pore and defect segmentation on Qualcomm edge devices.",
      tags: ["SAM", "Quantization", "Conv-LoRA", "Edge AI"]
    },
    {
      title: "PTQ of LSTM Text Classifiers",
      category: "Research",
      text: "Post-training quantization of generative and discriminative LSTM text classifiers with Brevitas — studying calibration, class balance, and robustness under low-bit inference.",
      tags: ["Brevitas", "LSTM", "ONNX", "PyTorch"]
    },
    {
      title: "Ball Bearing Defect Detection on Qualcomm Edge",
      category: "Research",
      text: "Real-time ball-bearing defect detection deployed on a Qualcomm edge device, demonstrating on-device inference for industrial condition monitoring.",
      link: "https://mushfiqshovon.github.io/BallBearingDefect_qcomm_edge/",
      tags: ["Edge AI", "Qualcomm", "Anomaly Detection", "Condition Monitoring"]
    },
    {
      title: "Domain Adaptation of SAM for Industrial XCT Defect Segmentation",
      category: "Research",
      text: "Adapting the Segment Anything Model (SAM) to the industrial X-ray computed tomography (XCT) domain for automated pore and defect segmentation in additive-manufactured parts.",
      tags: ["SAM", "Domain Adaptation", "XCT", "Segmentation"]
    },
    {
      title: "Non-invasive Hemoglobin Measurement",
      category: "Biomedical",
      text: "Handheld goggle prototype with an integrated camera that captures conjunctiva images and estimates blood hemoglobin using an image-processing correlation model. ~94% accuracy across 30 participants.",
      tags: ["Image Processing", "Prototype", "Biomedical"]
    },
    {
      title: "Robo Nurse",
      category: "Biomedical",
      text: "Assistive robotic nurse prototype designed to support routine patient-care tasks such as delivering items and monitoring, reducing the load on hospital staff.",
      tags: ["Assistive Robotics", "Healthcare", "Embedded"]
    },
    {
      title: "Low-cost Ultrasonic Eye for the Blind",
      category: "Biomedical",
      text: "Wearable ultrasonic obstacle-detection aid that alerts visually impaired users to nearby objects through vibration/sound feedback, built with low-cost components.",
      tags: ["Ultrasonic", "Assistive Tech", "Wearable"]
    },
    {
      title: "Energy Monitoring & Reporting System",
      category: "Industrial Automation",
      client: "Unilever Bangladesh Ltd.",
      text: "Plant-wide energy monitoring and reporting system on a local data server, giving live visibility into electricity, gas, water, and steam consumption to drive cost optimization.",
      tags: ["Energy Monitoring", "SCADA", "SQL Server", "Industry 4.0"]
    },
    {
      title: "Digital Factory Operating System (DFOS)",
      category: "Industrial Automation",
      client: "Unilever Bangladesh Ltd.",
      text: "OPC/Azure-based line-efficiency management system for packing lines, integrating shop-floor data with the cloud for real-time performance monitoring.",
      tags: ["OPC", "Azure", "Industry 4.0", "SCADA"]
    },
    {
      title: "Utility Plant Monitoring System",
      category: "Industrial Automation",
      client: "Unilever Bangladesh Ltd.",
      text: "Web-based monitoring and reporting system for utility assets — generators, chillers, compressors, water treatment plant, and boilers — using SCADA and SQL Server.",
      tags: ["SCADA", "SQL Server", "Utilities", "Web Dashboard"]
    },
    {
      title: "Soap Manufacturing Line Automation",
      category: "Industrial Automation",
      client: "Unilever Bangladesh Ltd.",
      text: "PLC and SCADA-based automation for the soap manufacturing line, improving process control, reliability, and line efficiency.",
      tags: ["PLC", "SCADA", "Allen-Bradley", "Process Control"]
    },
    {
      title: "Statistical Process Control (SPC)",
      category: "Industrial Automation",
      client: "Unilever Bangladesh Ltd.",
      text: "SQL Server + SSRS statistical process control dashboards for process lines, giving operators live SPC visibility and automated reporting.",
      tags: ["SQL Server", "SSRS", "SPC"]
    },
    {
      title: "Central Automation System Backbone",
      category: "Industrial Automation",
      client: "Unilever Bangladesh Ltd.",
      text: "Designed the complete physical network backbone (Central Automation System) that enabled Industry 4.0 connectivity across the plant floor.",
      tags: ["Networking", "Industry 4.0", "Infrastructure", "OPC"]
    },
    {
      title: "Resin Plant Automation",
      category: "Industrial Automation",
      client: "Berger Paints",
      role: "Project Manager, PLC & SCADA Programmer",
      text: "End-to-end automation of a resin manufacturing plant, from control design through PLC/SCADA programming, installation, and commissioning.",
      tags: ["PLC", "SCADA", "Batch Process", "Project Management"]
    },
    {
      title: "132 kV / 33 kV Substation SCADA",
      category: "Industrial Automation",
      client: "KYCR Steel Mill, KDS Group",
      role: "Project Manager, PLC & SCADA Programmer",
      text: "SCADA design and implementation for a high-voltage 132 kV/33 kV substation, delivered as project lead and programmer.",
      tags: ["SCADA", "Power Systems", "PLC", "High Voltage"]
    },
    {
      title: "Substation ACB Interlock System",
      category: "Industrial Automation",
      client: "Nestlé Bangladesh (Sreepur Plant)",
      role: "Programmer & Electrical Designer",
      text: "Designed and programmed an Air Circuit Breaker (ACB) interlock system to enforce safe switching sequences at the substation.",
      tags: ["ACB Interlock", "Electrical Design", "Substation", "Safety"]
    },
    {
      title: "Automatic Electroplating Machine Servicing",
      category: "Industrial Automation",
      client: "KDS Steel Accessories",
      text: "Servicing, troubleshooting, and control-system restoration of an automatic electroplating machine to return it to production.",
      tags: ["PLC", "Servicing", "Electroplating"]
    },
    {
      title: "Heat Sealing Machine Automation Servicing",
      category: "Industrial Automation",
      client: "Rahimafrooz Ltd.",
      text: "Automation servicing and control repair of a heat sealing machine, restoring reliable sealing operation on the line.",
      tags: ["Automation", "Servicing", "HMI"]
    },
    {
      title: "VFD Installation & Commissioning — Chiller Unit",
      category: "Industrial Automation",
      client: "Unilever (Kalurghat Plant)",
      text: "Installation and commissioning of variable frequency drives on a chiller unit to improve energy efficiency and process control.",
      tags: ["VFD", "Chiller", "Commissioning", "Energy Efficiency"]
    },
    {
      title: "Pump Station Automation",
      category: "Industrial Automation",
      client: "Dhaka WASA (Pilot Project)",
      text: "Pilot pump-station automation for the Dhaka Water Supply and Sewerage Authority, covering control logic, PLC/SCADA, and commissioning.",
      tags: ["PLC", "SCADA", "Pump Station", "Water Utility"]
    },
    {
      title: "Non-invasive Jaundice Detection",
      category: "Biomedical",
      text: "Non-invasive jaundice detection and total serum bilirubin measurement system, published at ICECE 2018.",
      tags: ["Biomedical", "Sensors", "Embedded"]
    },
    {
      title: "Three-Electrode ECG Recorder",
      category: "Biomedical",
      text: "Design, fabrication, and performance evaluation of a three-electrode ECG recorder, published at ICISET 2016.",
      tags: ["ECG", "Biomedical", "Instrumentation"]
    },
    {
      title: "Electronic Voting Machine",
      category: "Embedded Systems & Robotics",
      text: "Electronic voting machine combining biometric fingerprint recognition with RFID for secure, tamper-resistant voter authentication and vote counting.",
      tags: ["RFID", "Biometrics", "Microcontroller"]
    },
    {
      title: "Automatic Solar Tracker with Real Time Clock",
      category: "Embedded Systems & Robotics",
      text: "Sunlight-tracking solar panel that follows the sun using a real-time clock and light sensing to maximize daily energy harvest.",
      tags: ["Solar", "RTC", "Sensors", "Microcontroller"]
    },
    {
      title: "Library Automation with RFID System",
      category: "Embedded Systems & Robotics",
      text: "RFID-based library automation for issuing, returning, and tracking books, replacing manual logging with tap-to-scan operation.",
      tags: ["RFID", "Automation", "Embedded"]
    },
    {
      title: "Automatic Electric Billing System with GSM Technology",
      category: "Embedded Systems & Robotics",
      text: "Automatic electricity billing system that reads consumption and sends bills/alerts to users over GSM, removing the need for manual meter reading.",
      tags: ["GSM", "Metering", "IoT", "Microcontroller"]
    },
    {
      title: "Tele-operated Robotic Hand",
      category: "Embedded Systems & Robotics",
      text: "Tele-operated robotic hand mirroring human hand movement using gyroscope sensing, presented at ICMERE 2016.",
      tags: ["Robotics", "Gyro", "Tele-operation"]
    },
    {
      title: "Brain–Computer Interface (BCI)",
      category: "Biomedical",
      text: "Brain–computer interfacing experiments using the NeuroSky EEG headset, exploring EEG-driven control.",
      tags: ["EEG", "BCI", "NeuroSky"]
    }
  ],

  /* Order the project filter buttons + grid; unlisted categories fall back
     to the end in their natural order. */
  projectCategoryOrder: [
    "Research",
    "Industrial Automation",
    "Biomedical",
    "Embedded Systems & Robotics"
  ],

  /* ----------------------------------------------------------- publications */
  publications: [
    {
      authors: "Rahaman, M. M., Chang, E., Haque, T., & Das, S.",
      year: "2025",
      title:
        "Post-Training Quantization of Generative and Discriminative LSTM Text Classifiers: A Study of Calibration, Class Balance, and Robustness",
      venue: "arXiv preprint arXiv:2507.09687",
      doi: "https://doi.org/10.48550/arXiv.2507.09687"
    },
    {
      authors: "Sammir, M. R., Alam, K. M. R., Saha, P., Rahaman, M. M., & Hossain, Q. D.",
      year: "2018",
      title:
        "Design and Implementation of a Non-invasive Jaundice Detection and Total Serum Bilirubin Measurement System",
      venue: "Int. Conf. on Electrical and Computer Engineering (ICECE), pp. 137–140",
      doi: "https://doi.org/10.1109/ICECE.2018.8636801"
    },
    {
      authors: "Chowdhury, M., Hossain, Q. D., Saha, P., & Rahaman, M. M.",
      year: "2016",
      title:
        "Design, Fabrication and Performance Evaluation of a Three Electrode ECG Recorder",
      venue:
        "Int. Conf. on Innovations in Science, Engineering and Technology (ICISET), pp. 1–4",
      doi: "https://doi.org/10.1109/ICISET.2016.7856500"
    },
    {
      authors: "Sammir, M. R., et al.",
      year: "2016",
      title:
        "Development of Tele-operated Robotic Hand Observing Movement of the Human Hand Using Gyro",
      venue: "7th Int. Conf. on Mechanical Engineering and Renewable Energy (ICMERE)",
      doi: ""
    }
  ],
  acknowledgements: [
    {
      text:
        "Acknowledged for technical discussions and computing support in: Haque, T., Syed, M. A. B., Jeong, B., Bai, X., Mohan, S., Paul, S., Ahmed, I., & Das, S. (2026). “Towards efficient real-time video motion transfer via generative time series modeling.” Multimedia Tools and Applications, 85, Article 51.",
      doi: "https://doi.org/10.1007/s11042-026-21138-4"
    }
  ],

  /* ------------------------------------------------------------------ skills */
  skills: [
    {
      group: "Machine Learning & Edge AI",
      items: ["PyTorch", "Post-Training Quantization", "Brevitas", "ONNX", "Qualcomm QNN/SNPE", "Computer Vision", "Anomaly Detection", "LSTM / GRU / Transformers"]
    },
    {
      group: "Programming & Data",
      items: ["Python", "MATLAB", "C", "Java", "SQL", "Oracle", "JMP"]
    },
    {
      group: "Industrial Automation",
      items: ["PLC / HMI / SCADA", "Allen-Bradley", "Siemens", "Schneider", "VFD & Servo Systems"]
    },
    {
      group: "Industrial IoT & Communication",
      items: ["OPC / Kepware", "Azure (basics)", "Modbus", "PROFINET", "Ethernet", "Cisco Firewall (basics)"]
    },
    {
      group: "Edge & Embedded Devices",
      items: ["Qualcomm RB3 Gen2", "Raspberry Pi", "Arduino", "PIC Microcontroller"]
    },
    {
      group: "Servers & Research Computing",
      items: ["Kubernetes", "Nautilus / NRP", "Linux Server", "Proxmox", "VMware", "GPU Training"]
    },
    {
      group: "Engineering Tools",
      items: ["AutoCAD", "Proteus (ISIS/ARES)", "P-Spice", "Cadence EDA", "SAP"]
    }
  ],

  /* --------------------------------------------------------------- speaking */
  speaking: [
    {
      role: "Keynote Speaker",
      title: "Landing on Industry with a Future-fit Skillset",
      org: "Dept. of EEE, CUET — EEE Day",
      date: "Dec 8, 2022"
    },
    {
      role: "Keynote Speaker",
      title: "IoT in Industrial Automation — The Journey towards Industry 4.0",
      org: "Robo Mechatronics Association, CUET",
      date: "Dec 2021"
    },
    {
      role: "Guest Speaker",
      title: "An Open Talk on Science and Technology",
      org: "Chittagong University Laboratory School and College",
      date: "Feb 20, 2017"
    }
  ],

  /* ------------------------------------------------------------- leadership */
  leadership: [
    {
      role: "Co-Chair / Vice President",
      org: "IEEE Student Branch, CUET",
      date: "Dec 2015 – Dec 2016"
    },
    {
      role: "Organizing Secretary",
      org: "Robo Mechatronics Association, Bangladesh",
      date: "Oct 2015 – Dec 2016"
    },
    {
      role: "President",
      org: "Greater Barisal Student Association, CUET",
      date: "Sep 2015 – Dec 2016"
    }
  ],

  /* ----------------------------------------------------------------- awards */
  awards: [
    {
      title: "Best Engineer of the Year",
      org: "Unilever Bangladesh Ltd.",
      year: "2021"
    },
    {
      title: "Supply Chain Director’s Award — Talent Development in Control & Instrumentation",
      org: "Unilever Bangladesh Ltd.",
      year: "2022"
    }
  ]
};

/* Expose to other scripts. A top-level `const` in a classic script is NOT a
   property of `window`, so main.js reads the data from here. */
window.PORTFOLIO = PORTFOLIO;
