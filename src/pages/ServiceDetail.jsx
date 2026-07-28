import { useParams, Link } from "react-router-dom";
import {
  FaServer,
  FaNetworkWired,
  FaDatabase,
  FaSnowflake,
  FaShieldAlt,
  FaBolt,
  FaArrowLeft,
} from "react-icons/fa";
import "./Services.css";

const serviceData = {
  "infrastructure-design": {
    title: "Infrastructure Design",
    icon: <FaServer />,
    summary:
      "Design scalable and efficient data center infrastructure for enterprises.",
    details: [
      "VertexOne is a fictional enterprise platform developed to help students, IT professionals, and organizations understand the planning, design, and management of modern data center infrastructure. It provides detailed information about essential components such as servers, storage systems, networking devices, power distribution units, cooling solutions, and security systems, making it easier to explore how a data center operates as a complete ecosystem.",

        "VertexOne helps organizations plan efficient and scalable data center layouts by considering rack placement, equipment density, airflow optimization, cable management, and space utilization. Proper infrastructure planning ensures maximum performance, simplified maintenance, and reduced operational costs while allowing room for future expansion.",

        "The platform focuses on capacity planning by analyzing current infrastructure requirements and forecasting future growth. It enables organizations to estimate power consumption, cooling demands, rack availability, and hardware expansion needs so that the data center can grow without requiring expensive redesigns or major downtime.",

        "Every data center design within VertexOne incorporates redundancy and high-availability principles to minimize service interruptions. Backup power systems, redundant network connections, failover mechanisms, and disaster recovery strategies help maintain continuous operation even during hardware failures, maintenance activities, or unexpected outages.",

        "Modern businesses depend on data centers to host websites, cloud applications, enterprise software, databases, and communication systems. VertexOne demonstrates how these critical services rely on carefully planned infrastructure to deliver fast, secure, and uninterrupted performance to users around the world.",

        "The platform provides detailed descriptions of individual hardware components, explaining their purpose, technical specifications, and how they interact with other devices in the data center. This helps users build a strong understanding of the complete infrastructure rather than viewing each component in isolation.",

        "Security is a major focus of VertexOne. The platform highlights best practices such as network firewalls, biometric access control, surveillance systems, encryption, intrusion detection, backup strategies, and disaster recovery planning. These measures help protect valuable business data from cyber threats, unauthorized access, and physical damage.",

        "VertexOne also emphasizes energy efficiency and sustainable infrastructure. It explores advanced cooling technologies, efficient power distribution, renewable energy integration, and intelligent monitoring systems that reduce energy consumption while maintaining optimal operating conditions for all equipment.",

        "Organizations can use the platform to compare different infrastructure components based on performance, capacity, reliability, scalability, and cost. This comparison helps users understand which technologies are most suitable for different business requirements and workloads.",

        "The platform encourages modular infrastructure design, allowing new racks, servers, storage devices, and networking equipment to be added with minimal disruption. This flexibility ensures that data centers can adapt to increasing workloads and changing business demands over time.",

        "VertexOne also introduces users to industry-standard concepts such as virtualization, cloud computing, edge computing, hybrid infrastructure, load balancing, high availability, and fault tolerance. These technologies form the foundation of modern enterprise computing environments.",

        "Real-world inspired layouts and infrastructure planning examples help users visualize how equipment is organized within server rooms. From rack arrangements and cable routing to cooling zones and network topology, VertexOne presents practical scenarios that make complex concepts easier to understand.",

        "Whether you are a student learning about data centers, an educator preparing teaching materials, or an organization planning future infrastructure, VertexOne serves as a comprehensive learning and reference platform. Its goal is to simplify complex data center concepts while promoting efficient, secure, scalable, and future-ready infrastructure design."
          ],
  },
  "network-solutions": {
    title: "Network Solutions",
    icon: <FaNetworkWired />,
    summary: "High-speed networking with switches, routers, and firewalls.",
    details: [
      "VertexOne designs reliable and scalable network infrastructures that support both core and edge connectivity for modern enterprise environments. Our network architecture is engineered to deliver low latency, high bandwidth, and consistent performance across business-critical applications, cloud services, and on-premises workloads.",

      "The platform focuses on creating structured network topologies that ensure seamless communication between servers, storage devices, virtualization platforms, and end-user systems. Every network design is optimized to reduce bottlenecks, improve data transfer speeds, and maintain stable connectivity throughout the data center.",

      "Our solutions include redundant core, distribution, and access switching layers that eliminate single points of failure. By implementing multiple network paths and intelligent routing mechanisms, organizations can maintain continuous operations even when individual switches or communication links experience failures.",

      "VertexOne incorporates advanced firewall policy design and network segmentation strategies to improve security while maintaining optimal performance. Sensitive systems are isolated using VLANs, access control lists (ACLs), and secure routing policies, helping organizations protect critical resources from unauthorized access and cyber threats.",

      "The platform supports high-speed networking technologies, including fiber-optic communication, high-capacity Ethernet connections, and scalable switching solutions that meet the growing demands of enterprise applications, virtualization, and cloud computing.",

      "Comprehensive network monitoring tools continuously track bandwidth utilization, device health, latency, packet loss, and traffic patterns. Real-time analytics enable administrators to detect issues early, troubleshoot efficiently, and maintain peak network performance before users experience service disruptions.",

      "Automated failover mechanisms ensure uninterrupted connectivity by instantly redirecting network traffic when hardware failures, cable faults, or ISP outages occur. This improves system availability and minimizes downtime for mission-critical business operations.",

      "VertexOne emphasizes secure remote connectivity through Virtual Private Networks (VPNs), encrypted communication channels, multi-factor authentication, and secure gateway configurations. These features enable employees and administrators to safely access enterprise resources from any location.",

      "Load balancing technologies distribute incoming network traffic across multiple servers and network devices, preventing overload on individual systems while improving application responsiveness, resource utilization, and overall system reliability.",

      "Quality of Service (QoS) policies are integrated to prioritize critical applications such as VoIP, video conferencing, cloud services, and business applications. This ensures that essential services receive sufficient bandwidth even during periods of heavy network traffic.",

      "The platform supports scalable network expansion, allowing organizations to add new switches, routers, wireless access points, and network segments without disrupting existing operations. This modular approach ensures the infrastructure remains flexible as business requirements evolve.",

      "Whether supporting enterprise campuses, cloud environments, or modern data centers, VertexOne provides practical guidance for designing secure, high-performance, and future-ready network infrastructures that deliver reliability, efficiency, and continuous business connectivity."
      ],
  },
  "storage-solutions": {
    title: "Storage Solutions",
    icon: <FaDatabase />,
    summary: "Reliable storage systems for enterprise applications and backups.",
    details: [
      "VertexOne designs modern storage infrastructures that balance performance, capacity, reliability, and cost to meet the demands of enterprise applications and rapidly growing data. Our storage solutions ensure that organizations can efficiently manage both structured and unstructured data while maintaining fast and reliable access.",

      "The platform supports tiered storage strategies, allowing frequently accessed data to be stored on high-speed solid-state drives (SSDs) while less frequently used information is placed on cost-effective hard disk drives (HDDs) or archival storage. This approach maximizes performance while optimizing overall storage costs.",

      "VertexOne helps organizations choose the most suitable storage architecture, including Direct Attached Storage (DAS), Network Attached Storage (NAS), and Storage Area Networks (SAN). Each solution is evaluated based on business requirements, scalability, performance expectations, and budget considerations.",

      "Our storage planning includes comprehensive backup and disaster recovery strategies that protect critical business data from accidental deletion, hardware failures, ransomware attacks, and natural disasters. Automated backups, replication, and recovery procedures ensure that valuable information can be restored quickly with minimal downtime.",

      "The platform emphasizes data redundancy through technologies such as RAID configurations, data replication, and distributed storage systems. These features improve fault tolerance by ensuring that data remains available even if one or more storage devices fail.",

      "VertexOne incorporates storage virtualization technologies that simplify storage management by pooling multiple physical storage devices into a unified resource. This improves flexibility, simplifies administration, and enables better utilization of available storage capacity.",

      "Storage performance is continuously monitored using metrics such as input/output operations per second (IOPS), latency, throughput, and capacity utilization. These insights help administrators identify bottlenecks and optimize storage resources before performance issues affect users.",

      "The platform supports secure storage through encryption, role-based access control, secure authentication, and regular integrity checks. These security measures help protect sensitive business information from unauthorized access while ensuring compliance with industry standards and organizational policies.",

      "VertexOne is designed to accommodate future business growth by allowing seamless expansion of storage capacity without interrupting running applications or services. Organizations can add new storage arrays, increase capacity, and integrate cloud storage as their data requirements continue to grow.",

      "Hybrid and cloud storage solutions are also supported, enabling businesses to combine on-premises infrastructure with cloud platforms for improved flexibility, disaster recovery, and long-term scalability. This hybrid approach provides the benefits of both local performance and cloud resilience.",

      "The platform promotes efficient data lifecycle management by organizing information based on its importance, usage frequency, and retention requirements. This helps reduce storage costs while ensuring that critical data remains easily accessible whenever needed.",

      "Whether supporting enterprise databases, virtual machines, cloud applications, or large-scale backup systems, VertexOne provides comprehensive guidance for designing secure, scalable, and high-performance storage infrastructures that can adapt to changing business needs."
    ],
  },
  "cooling-systems": {
    title: "Cooling Systems",
    icon: <FaSnowflake />,
    summary: "Efficient cooling solutions to maintain optimal server temperatures.",
    details: [
     "VertexOne designs efficient cooling infrastructures that maintain optimal operating temperatures for servers, storage systems, networking equipment, and other critical hardware. Proper temperature control ensures consistent performance, reduces the risk of overheating, and significantly extends the lifespan of data center equipment.",

      "The platform evaluates airflow patterns throughout the data center to ensure that cool air reaches all equipment while hot air is efficiently removed. Well-planned airflow management minimizes temperature fluctuations and prevents the formation of hotspots that can affect system reliability.",

      "Hot aisle and cold aisle containment strategies are incorporated into every cooling design. By separating warm exhaust air from cool intake air, organizations can improve cooling efficiency, reduce energy waste, and maintain stable environmental conditions across server racks.",

      "VertexOne supports redundant cooling systems that continue operating even if a cooling unit fails or undergoes maintenance. This redundancy helps maintain uninterrupted service availability and protects mission-critical infrastructure from temperature-related failures.",

      "The platform considers multiple cooling technologies, including Computer Room Air Conditioners (CRAC), Computer Room Air Handlers (CRAH), liquid cooling, in-row cooling, and precision air conditioning systems. Each solution is selected based on the size, workload, and performance requirements of the data center.",

      "Temperature and humidity sensors are strategically placed throughout the facility to continuously monitor environmental conditions. Real-time monitoring allows administrators to detect abnormal conditions early and respond before equipment performance is affected.",

      "Energy efficiency is a key focus of VertexOne's cooling strategy. Intelligent cooling controls, variable-speed fans, optimized airflow management, and efficient cooling equipment help reduce electricity consumption while maintaining ideal operating temperatures.",

      "The platform also promotes sustainable cooling practices by supporting free-air cooling, water-efficient cooling technologies, and renewable energy integration where applicable. These environmentally friendly solutions reduce operational costs while lowering the facility's carbon footprint.",

      "Cooling capacity planning ensures that future server installations and infrastructure expansion can be accommodated without requiring major redesigns. This scalable approach allows organizations to grow their data centers while maintaining effective thermal management.",

      "VertexOne continuously evaluates cooling performance using environmental analytics, thermal mapping, and predictive monitoring tools. These insights help identify inefficient cooling zones, optimize resource utilization, and improve overall system reliability.",

      "Proper cable management and equipment placement are also considered during cooling design, ensuring unrestricted airflow around racks and minimizing obstacles that could reduce cooling efficiency or create localized heat buildup.",

      "Whether supporting enterprise server rooms, hyperscale data centers, or cloud infrastructure facilities, VertexOne provides comprehensive guidance for designing reliable, scalable, and energy-efficient cooling systems that ensure continuous operation and long-term infrastructure health."
    ],
  },
  "security-services": {
    title: "Security Services",
    icon: <FaShieldAlt />,
    summary: "Protect infrastructure with enterprise-grade security solutions.",
    details: [
      "VertexOne provides comprehensive security planning to protect data center infrastructure from both physical and cyber threats. Our security framework combines multiple layers of protection to ensure the confidentiality, integrity, and availability of critical business systems and sensitive information.",

      "Physical security begins with controlled access to the data center through biometric authentication, smart access cards, PIN-based entry systems, and visitor management procedures. These measures ensure that only authorized personnel can access critical infrastructure and equipment.",

      "Continuous surveillance is achieved using high-definition CCTV cameras, motion detection systems, security alarms, and 24/7 monitoring. These technologies help identify suspicious activities, prevent unauthorized access, and improve overall facility security.",

      "VertexOne incorporates network segmentation strategies using VLANs, firewalls, and secure routing policies to isolate sensitive systems from general network traffic. This limits the spread of cyber threats and improves the overall security posture of the data center.",

      "Advanced firewall configurations and intrusion detection and prevention systems (IDS/IPS) continuously monitor incoming and outgoing traffic. These security solutions identify malicious activities, block unauthorized access attempts, and protect critical infrastructure from evolving cyber attacks.",

      "Identity and Access Management (IAM) plays a central role in our security strategy. VertexOne supports role-based access control (RBAC), multi-factor authentication (MFA), and the principle of least privilege to ensure users receive only the permissions required for their responsibilities.",

      "The platform helps organizations establish effective security policies for user authentication, password management, privileged account administration, and secure remote access. These policies reduce the risk of unauthorized access and strengthen overall cybersecurity.",

      "Threat detection capabilities include continuous security monitoring, real-time event logging, vulnerability assessments, and automated alert systems. These features enable administrators to quickly detect, investigate, and respond to potential security incidents before they escalate.",

      "VertexOne also emphasizes incident response and disaster recovery planning by defining clear procedures for identifying, containing, investigating, and recovering from security breaches. Well-documented response plans help minimize downtime and reduce the impact of security incidents.",

      "Sensitive data is protected through encryption during storage and transmission, secure backup strategies, and regular integrity verification. These measures ensure that business information remains confidential and recoverable even in the event of hardware failures or cyber attacks.",

      "Compliance is integrated into every stage of infrastructure planning. VertexOne supports security best practices that align with widely recognized industry standards and regulatory frameworks, helping organizations maintain secure, auditable, and well-governed IT environments.",

      "Whether securing enterprise server rooms, cloud infrastructure, or large-scale data centers, VertexOne provides practical guidance for building resilient, scalable, and future-ready security architectures that safeguard business operations, critical assets, and customer data."
    ],
  },
  "power-backup": {
    title: "Power Backup",
    icon: <FaBolt />,
    summary:
      "UPS, generators, and redundant power systems for uninterrupted operations.",
    details: [
      "VertexOne designs resilient power infrastructures that ensure continuous operation of data center equipment even during unexpected power outages or electrical failures. Reliable power management is essential for maintaining business continuity, protecting critical hardware, and preventing costly downtime.",

      "Our power resilience strategy includes Uninterruptible Power Supply (UPS) systems that provide immediate backup power whenever the primary electrical supply is interrupted. UPS systems allow servers, storage devices, and networking equipment to continue operating until backup generators become fully active.",

      "Backup power is further strengthened through high-capacity diesel or gas-powered generators capable of supplying electricity for extended periods during utility outages. Automatic Transfer Switches (ATS) ensure a seamless transition between utility power and generator power with minimal disruption to business operations.",

      "VertexOne incorporates redundant power distribution paths to eliminate single points of failure. Dual power feeds, redundant Power Distribution Units (PDUs), and multiple electrical circuits ensure that critical equipment continues operating even if one power source becomes unavailable.",

      "The platform designs intelligent failover strategies that automatically reroute power to backup systems during maintenance activities, equipment failures, or unexpected electrical disturbances. These automated mechanisms significantly reduce downtime and improve overall infrastructure reliability.",

      "Capacity planning plays a key role in our power infrastructure design. VertexOne evaluates current power consumption, rack density, equipment load, and future expansion requirements to ensure sufficient electrical capacity is available as the data center grows.",

      "Power monitoring systems continuously measure voltage, current, energy consumption, and equipment load across the facility. Real-time dashboards and automated alerts help administrators identify overloaded circuits, inefficient power usage, and potential electrical issues before they affect operations.",

      "The platform promotes energy-efficient power management through intelligent load balancing, high-efficiency UPS systems, modern PDUs, and optimized power distribution. These strategies reduce electricity consumption while maintaining maximum system performance and reliability.",

      "Electrical safety is integrated into every design through proper grounding, surge protection, circuit isolation, and compliance with industry safety standards. These protective measures safeguard valuable infrastructure from power surges, short circuits, and electrical faults.",

      "VertexOne also supports modular power infrastructure, allowing organizations to expand electrical capacity by adding new UPS units, generators, PDUs, and power circuits without interrupting existing services. This flexible approach simplifies future upgrades and infrastructure scaling.",

      "Predictive maintenance and regular testing of UPS batteries, generators, transfer switches, and electrical distribution systems help ensure that backup power equipment remains fully operational and ready to respond during emergencies.",

      "Whether supporting enterprise server rooms, cloud platforms, or hyperscale data centers, VertexOne provides comprehensive guidance for designing secure, scalable, and highly available power infrastructures that deliver uninterrupted service, operational efficiency, and long-term reliability."
    ],
  },
};

function ServiceDetail() {
  const { slug } = useParams();
  const service = serviceData[slug];

  if (!service) {
    return (
      <div className="services-page">
        <div className="services-header">
          <h1>Service not found</h1>
          <p>The service you're looking for doesn't exist.</p>
        </div>
        <Link className="service-btn" to="/services">
          <FaArrowLeft style={{ marginRight: 8 }} />
          Back to services
        </Link>
      </div>
    );
  }

  return (
    <div className="services-page">
      <Link to="/services" className="back-link">
        <FaArrowLeft style={{ marginRight: 6 }} />
        Back to services
      </Link>

      <div className="detail-hero">
        <div className="service-icon detail-icon">{service.icon}</div>
        <div>
          <h1>{service.title}</h1>
          <p className="detail-summary">{service.summary}</p>
        </div>
      </div>

      <div className="detail-body">
        {service.details.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}

export default ServiceDetail;