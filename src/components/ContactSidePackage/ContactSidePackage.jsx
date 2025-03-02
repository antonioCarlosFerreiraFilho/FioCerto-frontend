import "./ContactSidePackage.css";

const ContactSidePackage = () => {
  return (
    <div className="ContactSidePackage">
      <div className="ContactSidePackage_container">
        <div className="ContactSidePackage_content">

          <div className="ContactSidePackage_box-Address-Contacts">
            <div className="ContactSidePackage_box-Address">
              <h1>Escritorio</h1>
              <div className="ContactSidePackage_box-Address-List">
                <p>Monte Abraâo</p>
                <p>2745-308</p>
              </div>
            </div>
            <div className="ContactSidePackage_box-Contacts">
              <h1>Contato</h1>
              <div className="ContactSidePackage_box-Contacts-List">
                <p>(351) 934 897 540</p>
                <p>(351) 923 127 603</p>
                <p>(351) 932 015 787</p>
              </div>
            </div>
            <div className="ContactSidePackage_box-Schedules">
              <h1>Horarios Funcionamento</h1>
              <div className="ContactSidePackage_box-Schedules-List">
                <p>Seg: 08:00 as 00:00</p>
                <p>Ter: 08:00 as 00:00</p>
                <p>Qua: 08:00 as 00:00</p>
                <p>Qui: 08:00 as 00:00</p>
                <p>Sex: 08:00 as 00:00</p>
                <p>Sab: 08:00 as 00:00</p>
                <p>Dom: Encerado</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactSidePackage;
