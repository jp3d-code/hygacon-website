import type { ClientCommitment, ClientGroup } from "@/shared/types/data";

export const clientGroups: ClientGroup[] = [
  {
    id: "public",
    title: "Entidades Gubernamentales",
    description:
      "Municipalidades y organismos públicos que confiaron en HYGACON.",
    items: [
      { name: "Municipalidad Provincial de Moho" },
      { name: "Municipalidad Provincial de San Antonio de Putina" },
      { name: "Municipalidad Distrital de Challhuahuacho" },
      { name: "Municipalidad Distrital de Ituata" },
      { name: "Municipalidad Distrital de Santo Tomas" },
    ],
  },
  {
    id: "private",
    title: "Empresas Privadas",
    description:
      "Aliados del sector privado que forman parte de nuestro portafolio.",
    items: [{ name: "CyM VIZCARRA S.A.C." }, { name: "HV GROUP" }],
  },
];

export const clientCommitments: ClientCommitment[] = [
  {
    title: "Satisfacción y resultados",
    description:
      "Orientamos el esfuerzo del equipo hacia el logro de resultados que satisfacen plenamente al cliente.",
  },
  {
    title: "Actitud de servicio",
    description:
      "Brindamos apoyo total y compromiso en la consecución de objetivos con un trato personalizado.",
  },
  {
    title: "Entrega oportuna",
    description:
      "Garantizamos obras de calidad dentro de los plazos previstos como sello de la empresa.",
  },
  {
    title: "Garantía financiera",
    description:
      "Nuestra solidez económica respalda el cumplimiento de proyectos de gran envergadura.",
  },
];
