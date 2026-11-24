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
    tagline: "Ph.D. Student in Industrial Engineering (AI/ML)",
    subtagline:
      "Edge AI · Model Quantization · Smart Manufacturing · Industry 4.0",
    location: "Morgantown, WV, USA",
    institution: "West Virginia University",
    department: "Department of Industrial and Management Systems Engineering",
    photo: "assets/img/profile.jpeg",
    resumeAcademic: "assets/docs/CV_Mushfiqur_Rahaman_Academic.pdf",
    resumeProfessional: "assets/docs/CV_Mushfiqur_Rahaman_Professional.pdf",
    about: [
      "I'm a Ph.D. student in Industrial Engineering (AI/ML) at West Virginia University. My work is about making deep learning practical on the factory floor: running models in real time on edge devices, shrinking them with post-training quantization, and using them to find defects in additive-manufactured parts and other smart-manufacturing systems.",
      "Before coming back to school, I spent more than six years in FMCG manufacturing at Unilever Bangladesh, Nestlé Bangladesh, and Unipolar Automation Technologies, leading industrial automation and Industry 4.0 projects. I worked hands-on with SCADA and PLC systems, built OPC, SQL, and Azure data pipelines, and helped digitalize plants. That experience shapes my research: I care about what it really takes to deploy AI in a working factory.",
      "I also hold an M.S. in Applied Mathematics from WVU and a B.Sc. in Electrical and Electronic Engineering from CUET. What I enjoy most is getting capable models to run well on small, low-power hardware."
    ]
  },

  /* ------------------------------------------------------------------ stats
     Use `value` for a fixed number, or `count: "<key>"` to show the length
     of that array in this file (e.g. "publications", "awards"), so the
     number updates itself when items are added. */
  stats: [
    { value: "6+", label: "Years in Industry 4.0" },
    { count: "publications", label: "Peer-Reviewed Publications" },
    { value: "3", label: "Global FMCG / Automation Firms" },
    { count: "awards", label: "Honors & Awards" }
  ],

  /* ------------------------------------------------------------------- news
     Newest first. The first `newsVisible` items show; the rest sit behind a
     "Show all" button.
       date   : display text (e.g. "Nov 2026")
       type   : award | talk | demo | paper | milestone  (sets the badge)
       title  : headline
       text   : one or two sentences (HTML allowed)
       images : optional [{ src, alt }] — click opens a full-size viewer
       links  : optional [{ label, url }]                                   */
  newsVisible: 5,
  news: [
    {
      date: "Nov 2026",
      type: "demo",
      title: "Live demo at the Qualcomm booth, electronica 2026 in Munich",
      text: "With my advisor Dr. Srinjoy Das, I demonstrated our real-time ball-bearing defect segmentation running fully on-device on a Qualcomm Dragonwing™ IQ-9075 at Qualcomm's booth (C5.439) at electronica 2026, the biennial international trade fair for electronics. The project was developed in partnership with Qualcomm, and we presented it to engineers and industry visitors throughout the show.",
      images: [
        { src: "assets/img/news/electronica-booth-1.jpg", alt: "At the Qualcomm booth at electronica 2026 with the live ball-bearing defect segmentation demo on the Dragonwing IQ-9075" },
        { src: "assets/img/news/electronica-booth-2.jpg", alt: "With my advisor, Dr. Srinjoy Das, at the Qualcomm booth at electronica 2026" }
      ],
      links: [
        { label: "Booth video", url: "https://www.youtube.com/watch?v=xz7teBhSEjQ" },
        { label: "Project page", url: "https://mushfiqshovon.github.io/BallBearingDefect_qcomm_edge/" }
      ]
    },
    {
      date: "Nov 2026",
      type: "talk",
      title: "Presented and chaired a session at INFORMS 2026, San Francisco",
      text: "Presented <em>Edge-Deployable Ball Bearing Defect Segmentation via Pseudo-Mask Bootstrapping and Parameter-Efficient SAM Domain Adaptation</em> and served as Session Chair for SA16, <em>AI-Enabled Process Improvement in Service Operations</em>, at the 2026 INFORMS Annual Meeting.",
      images: [
        { src: "assets/img/news/informs-sf.jpg", alt: "At the INFORMS 2026 Annual Meeting in San Francisco" },
        { src: "assets/img/news/informs-talk.jpg", alt: "Presenting at the 2026 INFORMS Annual Meeting" },
        { src: "assets/img/news/informs-session-chair.jpg", alt: "Chairing session SA16 at INFORMS 2026" }
      ]
    },
    {
      date: "Oct 2026",
      type: "award",
      title: "Overall Runner-up in the Student Poster Competition at the Mountain State Cyber Summit 2026",
      text: "Our poster <em>Cloud-Free Edge AI for Defect Inspection in Metal Additive Manufacturing</em> (with Md Mahedi Hasan) was named Second Overall Poster at the WVU Mountain State Cyber Summit + Tech Yeah 2026, my first poster presentation as a Ph.D. student. My wife, Tasmiah Haque, took Track Winner in her track.",
      images: [
        { src: "assets/img/news/cyber-summit-award.jpg", alt: "Holding the Second Overall Poster certificate with my wife, Tasmiah Haque, Track Winner, at the WVU Mountain State Cyber Summit" },
        { src: "assets/img/news/cyber-summit-poster.jpg", alt: "Standing beside poster AM-02 at the Mountain State Cyber Summit 2026" }
      ]
    },
    {
      date: "Sep 2026",
      type: "paper",
      title: "DCM-SAM accepted at the NeurIPS 2026 Workshop on On-Device Intelligence",
      text: "Our defect-conditioned mixture of LoRA experts for SAM, deployed on the Hexagon NPU of a Qualcomm Dragonwing IQ-9075, was accepted as a poster.",
      links: [
        { label: "OpenReview", url: "https://openreview.net/forum?id=Ehh5nUkKCM" },
        { label: "Project page", url: "https://mushfiqshovon.github.io/DCM-SAM/" }
      ]
    },
    {
      date: "Jun 2026",
      type: "paper",
      title: "XCT-SAM accepted for oral presentation at MVI² @ ICPR 2026, Lyon",
      text: "Sequential parameter-efficient domain adaptation of SAM for industrial XCT defect segmentation, published in the Springer workshop proceedings.",
      links: [
        { label: "arXiv", url: "https://arxiv.org/abs/2607.14287" }
      ]
    },
    {
      date: "Aug 2025",
      type: "milestone",
      title: "Started my Ph.D. in Industrial Engineering (AI/ML) at WVU",
      text: "After completing my M.S. in Applied Mathematics at West Virginia University."
    },
    {
      date: "Jul 2025",
      type: "paper",
      title: "Preprint: Post-Training Quantization of LSTM Text Classifiers",
      text: "A study of calibration, class balance, and robustness for generative and discriminative LSTM classifiers under low-bit inference.",
      links: [
        { label: "arXiv", url: "https://doi.org/10.48550/arXiv.2507.09687" }
      ]
    }
  ],

  /* --------------------------------------------------------------- contacts */
  contacts: {
    emailPrimary: "mr00131@mix.wvu.edu",
    emailSecondary: "mushfiq.r.shovon@gmail.com",
    phone: "+1 304 685 7615",
    phoneBd: "+880 1756 488224",
    linkedin: "https://www.linkedin.com/in/md-mushfiqur-rahaman-532506a7/",
    scholar: "https://scholar.google.com/citations?hl=en&user=BgRIA8cAAAAJ",
    orcid: "https://orcid.org/0009-0005-2418-817X",
    github: "https://github.com/MushfiqShovon"
  },

  /* ------------------------------------------------------- research focus */
  research: {
    intro:
      "My work centers on making modern deep learning models small, fast, and reliable enough to run on the edge, right next to the sensors and cameras in a factory or clinic.",
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
      }
    ]
  },

  /* --------------------------------------------------------------- education */
  education: [
    {
      school: "West Virginia University",
      location: "Morgantown, WV, USA",
      degree: "Ph.D. in Industrial Engineering (Concentration: AI/ML)",
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
      role: "Research Assistant, Data Science",
      org: "School of Mathematical and Data Sciences, West Virginia University",
      location: "Morgantown, WV, USA",
      period: "2023 – Present",
      points: [
        "Research on post-training quantization of neural networks for efficient AI deployment on edge devices, including low-bit precision techniques and calibration methods.",
        "Working on domain adaptation and quantization of SAM-based segmentation models for additive-manufacturing defect inspection.",
        "Co-first author of DCM-SAM (NeurIPS 2026 workshop), a defect-conditioned mixture of LoRA experts for SAM deployed on a Qualcomm Dragonwing IQ-9075 NPU."
      ]
    },
    {
      role: "Manager, Electrical and Automation",
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
      role: "Officer, Electrical and Automation",
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
      title: "DCM-SAM: Mixture of LoRA Experts for NPU-Deployed Defect Segmentation",
      category: "Research",
      text: "Promptless SAM (ViT-B) with a separate Conv-LoRA mixture-of-experts bank and mask decoder for each defect class, segmenting pores and inclusions in additive-manufacturing XCT scans. Deployed in FP16 on the Hexagon NPU of a Qualcomm Dragonwing IQ-9075; reaches 64.2% pore IoU on real NIST XCT scans while training ~4.4% of parameters per defect head. NeurIPS 2026 workshop paper.",
      link: "https://mushfiqshovon.github.io/DCM-SAM/",
      tags: ["SAM", "Mixture of LoRA Experts", "NPU Deployment", "XCT"]
    },
    {
      title: "SAM Quantization for AM Defect Inspection",
      category: "Research",
      text: "Domain adaptation and low-bit quantization of Segment Anything Model (SAM) for XCT-based additive-manufacturing pore and defect segmentation on Qualcomm edge devices.",
      tags: ["SAM", "Quantization", "Conv-LoRA", "Edge AI"]
    },
    {
      title: "PTQ of LSTM Text Classifiers",
      category: "Research",
      text: "Post-training quantization of generative and discriminative LSTM text classifiers with Brevitas, studying calibration, class balance, and robustness under low-bit inference.",
      tags: ["Brevitas", "LSTM", "ONNX", "PyTorch"]
    },
    {
      title: "Ball Bearing Defect Detection on Qualcomm Edge",
      category: "Research",
      text: "Real-time ball-bearing defect detection and segmentation running fully on-device on a Qualcomm Dragonwing IQ-9075. Developed in partnership with Qualcomm, demonstrated live at the Qualcomm booth at electronica 2026 (Munich), and presented at INFORMS 2026.",
      link: "https://mushfiqshovon.github.io/BallBearingDefect_qcomm_edge/",
      video: "https://www.youtube.com/watch?v=xz7teBhSEjQ",
      tags: ["Edge AI", "Qualcomm Dragonwing", "SAM", "Defect Segmentation"]
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
      text: "Web-based monitoring and reporting for utility assets (generators, chillers, compressors, water treatment plant, and boilers), built on SCADA and SQL Server.",
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
      title: "VFD Installation & Commissioning for a Chiller Unit",
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
      authors: "Rahaman, M. M.†, Hasan, M. M.†, Ahmed, I., & Das, S.",
      note: "† Equal contribution (co-first authors)",
      year: "2026",
      title:
        "DCM-SAM: Defect-Conditioned Mixture of LoRA Experts for NPU-Deployed AM Defect Segmentation",
      venue:
        "NeurIPS 2026 Workshop on On-Device Intelligence: Foundation Models under Real-World Constraints",
      doi: "https://openreview.net/forum?id=Ehh5nUkKCM",
      page: "https://mushfiqshovon.github.io/DCM-SAM/"
    },
    {
      authors: "Hasan, M. M.†, Rahaman, M. M.†, Pachkovskiy, A., Ahmed, I., Dawson, J., & Das, S.",
      note: "† Equal contribution (co-first authors)",
      year: "2026",
      title:
        "XCT-SAM: Sequential Parameter-Efficient Domain Adaptation of SAM for Industrial XCT Defect Segmentation",
      venue:
        "IAPR Workshop on Machine Vision for Industrial Inspection (MVI²), 28th Int. Conf. on Pattern Recognition (ICPR 2026), Lyon, France · arXiv:2607.14287",
      doi: "https://arxiv.org/abs/2607.14287"
    },
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
      group: "Edge AI & Model Optimization",
      items: ["Hexagon NPU Deployment", "Qualcomm QNN/SNPE", "Qualcomm AI Hub", "Post-Training Quantization", "FP16 / Low-bit Inference", "Model Compression", "Brevitas", "ONNX", "On-device Profiling"]
    },
    {
      group: "Deep Learning & Computer Vision",
      items: ["PyTorch", "CNNs", "LSTM / Transformers", "Vision Transformers", "Segment Anything (SAM, MobileSAM)", "YOLOv8", "Transfer Learning", "LoRA / Mixture of Experts", "Computer Vision", "Image Segmentation", "Anomaly Detection"]
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
      items: ["Qualcomm Dragonwing IQ-9075", "Qualcomm RB3 Gen2","Raspberry Pi", "Arduino", "PIC Microcontroller"]
    },
    {
      group: "Servers & Research Computing",
      items: ["Kubernetes", "Nautilus / NRP", "Linux Server", "Proxmox", "VMware", "CUDA GPU Training"]
    },
    {
      group: "Engineering Tools",
      items: ["AutoCAD", "Proteus (ISIS/ARES)", "P-Spice", "Cadence EDA", "SAP"]
    }
  ],

  /* --------------------------------------------------------------- speaking */
  speaking: [
    {
      role: "Live Demo",
      title: "Real-Time Ball Bearing Defect Segmentation on Qualcomm Dragonwing IQ-9075",
      org: "Qualcomm booth, electronica 2026, Munich",
      date: "Nov 10–13, 2026"
    },
    {
      role: "Presenter",
      title: "Edge-Deployable Ball Bearing Defect Segmentation via Pseudo-Mask Bootstrapping and Parameter-Efficient SAM Domain Adaptation",
      org: "2026 INFORMS Annual Meeting, San Francisco (Session SA16)",
      date: "Nov 1, 2026"
    },
    {
      role: "Poster Presenter",
      title: "Cloud-Free Edge AI for Defect Inspection in Metal Additive Manufacturing",
      org: "Mountain State Cyber Summit + Tech Yeah 2026, WVU",
      date: "Oct 27, 2026"
    },
    {
      role: "Keynote Speaker",
      title: "Landing on Industry with a Future-fit Skillset",
      org: "EEE Day, Dept. of EEE, CUET",
      date: "Dec 8, 2022"
    },
    {
      role: "Keynote Speaker",
      title: "IoT in Industrial Automation: The Journey towards Industry 4.0",
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
      role: "Session Chair, SA16: AI-Enabled Process Improvement in Service Operations",
      org: "2026 INFORMS Annual Meeting, San Francisco",
      date: "Nov 1, 2026"
    },
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
      title: "Second Overall Poster (Overall Runner-up), Student Poster Competition",
      org: "Mountain State Cyber Summit + Tech Yeah 2026, West Virginia University",
      year: "2026"
    },
    {
      title: "Supply Chain Director’s Award for Talent Development in Control & Instrumentation",
      org: "Unilever Bangladesh Ltd.",
      year: "2022"
    },
    {
      title: "Best Engineer of the Year",
      org: "Unilever Bangladesh Ltd.",
      year: "2021"
    }
  ]
};

/* Expose to other scripts. A top-level `const` in a classic script is NOT a
   property of `window`, so main.js reads the data from here. */
window.PORTFOLIO = PORTFOLIO;
