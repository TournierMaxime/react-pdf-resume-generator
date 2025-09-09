export type Experiences = {
  fr: ExperienceProps[]
  en: ExperienceProps[]
}

export type ExperienceProps = {
  title: string
  duration: string
  employer: string
  location: string
  details: {
    entry: string
  }[]
}

const Experience: Experiences = {
  fr: [
    {
      title: "Développeur Full-Stack",
      duration: "Octobre 2024 - Mai 2025",
      employer: "TM Création Apps",
      location: "Toulouse, France",
      details: [
        {
          entry:
            "Créer des librairies internes npm (authentification, notifications email) en TypeScript, augmentant la productivité de 30%.",
        },
        {
          entry:
            "Conception d'un Manufacturing Management Software, pour la gestion d'un parc de machine dans la ditribution de colis.",
        },
        {
          entry:
            "Configurer des environnements de production stables et reproductibles avec Docker, facilitant l'intégration continue.",
        },
        {
          entry:
            "Organiser et prioriser efficacement les tâches avec JIRA comme gestionnaire de projet.",
        },
      ],
    },
    {
      title: "Développeur Full-Stack",
      duration: "Octobre 2022 - Octobre 2024",
      employer: "Devs de France",
      location: "Nice, France",
      details: [
        {
          entry:
            "Conception d'une interface React pour la prise de commandes d'un robot bar automatisé, utilisé par 20+ clients/semaine.",
        },
        {
          entry:
            "Collaborer en équipe Agile SCRUM (sprints de 2 semaines, daily, code reviews), livrant en moyenne 2 features majeures par itération.",
        },
        {
          entry:
            "Migration d'un SaaS e-commerce (2,3 M références) de PHP vers Node.js et React, réduisant le temps de réponse serveur de 40 %.",
        },
        {
          entry:
            "Configurer des conteneurs Docker sur 6 projets, divisant par deux le temps d'onboarding.",
        },
      ],
    },
    {
      title: "Spécialiste du service après-vente",
      duration: "Octobre 2019 - Juillet 2022",
      employer: "Pascal Coste Shopping",
      location: "Carros, France",
      details: [
        {
          entry:
            "Formé 5 collaborateurs à Zendesk, réduisant le temps de traitement des tickets de 20 % en moyenne.",
        },
        {
          entry:
            "Gérer la résolution de litiges clients et fournisseurs, en assurant un suivi rigoureux.",
        },
        {
          entry:
            "Optimiser le processus de contrôle des retours produits, permettant le remboursement client et augmentant la satisfaction de 30%.",
        },
      ],
    },
  ],
  en: [
    {
      title: "Fullstack Developer",
      duration: "October 2024 - May 2025",
      employer: "TM Création Apps",
      location: "Toulouse, France",
      details: [
        {
          entry:
            "Created internal npm libraries (authentication, email notifications) in TypeScript, increasing productivity by 30%.",
        },
        {
          entry:
            "Automated content publishing on X using Node.js scripts and cron jobs, increasing the number of subscribers by 15% for the Speedrunhub platform.",
        },
        {
          entry:
            "Set up stable and reproducible production environments with Docker, facilitating continuous integration.",
        },
        {
          entry:
            "Ensuring effective communication with stakeholders and rigorously monitoring deliverables.",
        },
      ],
    },
    {
      title: "Fullstack Developer",
      duration: "October 2022 - October 2024",
      employer: "Devs de France",
      location: "Nice, France",
      details: [
        {
          entry:
            "Collaborate in an Agile team (2-week sprints, daily code reviews), delivering an average of two major features per iteration.",
        },
        {
          entry:
            "Develop a back office containing 2.3 million product references, reducing SQL response times by 40%.",
        },
        {
          entry:
            "Configure Docker containers on 6 projects, halving onboarding time.",
        },
        {
          entry:
            "Develop a touch-enabled React interface for an automated robot bar, used by over 100 customers per week.",
        },
      ],
    },
    {
      title: "After Sales Service Specialist",
      duration: "October 2019 - July 2022",
      employer: "Pascal Coste Shopping",
      location: "Carros, France",
      details: [
        {
          entry:
            "Trained 5 employees in Zendesk, reducing ticket processing time by an average of 20%.",
        },
        {
          entry:
            "Managed customer and supplier dispute resolution, ensuring rigorous follow-up.",
        },
        {
          entry:
            "Optimized the product return control process, enabling customer refunds and increasing satisfaction by 30%.",
        },
      ],
    },
    {
      title: "Health Assistant",
      duration: "October 2017 - October 2019",
      employer: "French Army",
      location: "La Valbonne, France",
      details: [
        {
          entry:
            "Deployed on Operation Sentinelle (national security) in an urban context.",
        },
        {
          entry:
            "Responsible for the transmission equipment of the NRBC (nuclear, radiological, biological, and chemical) section.",
        },
        {
          entry:
            "Ranked 2nd out of 40 in the class, recognized for rigor and initiative.",
        },
      ],
    },
  ],
}

export default Experience
