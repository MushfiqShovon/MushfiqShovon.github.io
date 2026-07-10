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
      title: "Non-invasive Hemoglobin Measurement",
      category: "Biomedical",
      text: "Handheld goggle prototype with an integrated camera that captures conjunctiva images and estimates blood hemoglobin using an image-processing correlation model. ~94% accuracy across 30 participants.",
      tags: ["Image Processing", "Prototype", "Biomedical"]
    },
    {
      title: "Digital Factory Operating System (DFOS)",
      category: "Industrial Automation",
      text: "OPC/Azure-based line-efficiency management system for packing lines at Unilever, integrating shop-floor data with the cloud for real-time performance monitoring.",
      tags: ["OPC", "Azure", "Industry 4.0", "SCADA"]
    },
    {
      title: "Statistical Process Control App",
      category: "Industrial Automation",
      text: "SQL Server + SSRS statistical process control dashboards for process lines, giving operators live SPC visibility and reporting.",
      tags: ["SQL Server", "SSRS", "SPC"]
    },
    {
      title: "132 kV / 33 kV Substation SCADA",
      category: "Industrial Automation",
      text: "SCADA design and implementation for a high-voltage substation at KYCR Steel Mill as project lead and programmer.",
      tags: ["SCADA", "Power Systems", "PLC"]
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
      title: "Bi-pedal & Quad-rotor Robots",
      category: "Robotics",
      text: "Six-DOF servo-based bi-pedal robot and a GPS-tracked quad-rotor flying robot, among a range of obstacle-detecting and maze-solving robots.",
      tags: ["Robotics", "Servo", "GPS", "Arduino"]
    },
    {
      title: "Biometric Electronic Voting Machine",
      category: "Robotics",
      text: "Electronic voting machine combining biometric fingerprint recognition with RFID, alongside RFID library automation and other embedded systems.",
      tags: ["RFID", "Biometrics", "Microcontroller"]
    },
    {
      title: "Tele-operated Robotic Hand",
      category: "Robotics",
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
