export function Technology() {
    return ( 
        <>
        <div className="bg-[#191f30] w-full pt-24 grid grid-cols-2">
            <div className="text-black p-10">
                <h1 className="font-montserrat font-bold text-white text-3xl">Biometric identification ecosystem</h1>
                <h3 className="mt-9 text-[#9197a4] font-montserrat font-medium text-lg">A set of technologies and proven practices for implementing and effectively applying biometric solutions based on various algorithms.</h3>
            </div>
            <div className="">
                <img src="https://recfaces.com/wp-content/uploads/2020/11/frame-187.png" alt="" />
            </div>
        </div>

        <div className="grid grid-cols-4 bg-[#252d40] pt-20 px-10">
            <div>
                <img src="https://recfaces.com/wp-content/uploads/2020/03/rectangle-128.jpg" alt="" className="rounded-lg h-[450px]" />
            </div>
            <div className="col-span-3 pl-28">
                <h1 className="text-white font-montserrat font-bold text-2xl">TECHNOLOGY STACK FOR BIOMETRIC IDENTIFICATION SOFTWARE PRODUCTS</h1>
                <p className="font-montserrat font-medium text-[#9197a4] mt-10">The technological base of RecFaces biometric identification software products is built on a microservice and cross-platform architecture. Contains a large set of services for performing biometric, application and service tasks. Provide the ability to create boxed solutions for large distributed solutions, including the simultaneous use of multiple biometric algorithms.</p>
                <div className="grid grid-cols-3 mt-10 pb-5 border-b border-[#9197a4]">
                    <div>
                        <p className="font-montserrat font-medium text-white text-sm">OPERATING SYSTEM</p>
                        <div className="mt-2">
                        <img src="https://recfaces.com/wp-content/uploads/2020/03/os-linux.svg" alt="" className="float-left p-3"/>
                        <img src="https://recfaces.com/wp-content/uploads/2020/03/os-windows.svg" alt="" className="float-left p-3"/>
                        <img src="https://recfaces.com/wp-content/uploads/2020/04/android-1.svg" alt="" className="float-left p-3"/>
                        </div>    
                    </div>
                    <div>
                        <p className="font-montserrat font-medium text-white text-sm">SERVER PART</p>
                        <div className="mt-2">
                        <p className="font-montserrat font-medium text-[#9197a4] text-sm">Linux 2.6.33 or higher</p>
                        <p className="font-montserrat font-medium text-[#9197a4] text-sm mt-2">Windows 2008 or higher</p>
                        </div>    
                    </div>
                    <div>
                        <p className="font-montserrat font-medium text-white text-sm">CLIENT</p>
                        <div className="mt-2">
                        <p className="font-montserrat font-medium text-[#9197a4] text-sm">Linux 2.6.33 or higher</p>
                        <p className="font-montserrat font-medium text-[#9197a4] text-sm mt-2">Windows 7 x86/x64 or higher</p>
                        </div>        
                    </div>
                </div>

                <div className="grid grid-cols-3 mt-10 pb-5 border-b border-[#9197a4]">
                    <div>
                        <p className="font-montserrat font-medium text-white text-sm">PROTOCOLS FOR INFORMATION EXCHANGE BETWEEN SYSTEM COMPONENTS</p>
                          
                    </div>
                    <div className="col-span-2">
                        <p className="font-montserrat font-medium text-[#9197a4] text-sm">HTTP</p>
                        <p className="font-montserrat font-medium text-[#9197a4] text-sm mt-2">HTTPS</p>
                        <p className="font-montserrat font-medium text-[#9197a4] text-sm mt-2">Apache</p>
                        <p className="font-montserrat font-medium text-[#9197a4] text-sm mt-2">API</p>                           
                    </div>
                </div>

                <div className="grid grid-cols-3 mt-10 pb-14 ">
                    <div>
                        <p className="font-montserrat font-medium text-white text-sm">DATABASE</p>
                           
                    </div>
                    <div className="col-span-2">
                        <p className="font-montserrat font-medium text-[#9197a4] text-sm">The database is selected depending on the customer's needs. We offer MySQL as the main DBMS. You can switch to PostgreSQL (Postgres Pro) , Oracle, SQLite, SQLite3 databases.</p>
                        <p className="font-montserrat font-medium text-[#9197a4] text-sm mt-2">The platform implements the function of caching high-demand data by default, it is suggested to use Redis for caching. On request it is possible to use Memcached or Tarantool.</p>
                        
                    </div>
                </div>  
            </div>
        </div> 

        <div className="bg-[#191f30] font-montserrat pt-20 px-10">
            <h1 className="font-bold text-white text-2xl">SYSTEM FEATURES</h1>
            <div className="grid grid-cols-2 mt-10 pb-20 gap-10">
                <div className="bg-[#252d40] px-8 py-10">
                    <h1 className="font-bold text-white text-lg">INTEGRATION</h1>
                    <p className="text-[#9197a4] mt-8 text-sm">Integration with the system is possible on 3 levels:</p>
                    <p className="text-[#9197a4] mt-3 text-sm"><span className="font-bold text-white"> High-level integration: </span>sending out e-mail, sms using custom message templates, calls to external systems using REST/SOAP using templates configured by the administrator;</p>
                    <p className="text-[#9197a4] mt-3 text-sm" ><span className="font-bold text-white">External REST API: </span> calling all business functions;</p>
                    <p className="text-[#9197a4] mt-3 text-sm"><span className="font-bold text-white">Low-level API:</span> calling all internal functions of services.</p>
                </div>
                <div className="bg-[#252d40] px-8 py-10">
                    <h1 className="font-bold text-white text-lg">SCALING</h1>
                    <p className="text-[#9197a4] mt-8 text-sm"><span className="font-bold text-white">Services </span>– horizontal scaling</p>
                    <p className="text-[#9197a4] mt-3 text-sm"><span className="font-bold text-white">Database </span>– vertical and horizontal scaling</p>
                    <p className="text-[#9197a4] mt-3 text-sm"><span className="font-bold text-white">Queues </span> – vertical and horizontal scaling</p>
                </div>
                <div className="bg-[#252d40] px-8 py-10">
                    <h1 className="font-bold text-white text-lg">ROLE MODEL AND AUTHORIZATION</h1>
                    <p className="text-[#9197a4] mt-8 text-sm">The platform contains a flexible role model that allows you to fine-tune privileges and roles, with the ability to inherit roles.</p>
                    <p className="text-[#9197a4] mt-3 text-sm"><span className="font-bold text-white"> Built-in authorization </span>— authorization by login / password, by token</p>
                    <p className="text-[#9197a4] mt-3 text-sm"><span className="font-bold text-white">Active Directory </span> — Using an external AD server during authorization</p>
                    <p className="text-[#9197a4] mt-3 text-sm"><span className="font-bold text-white">LDAP</span> — Using an external LDAP server during authorization</p>
                </div>
                <div className="bg-[#252d40] px-8 py-10">
                    <h1 className="font-bold text-white text-lg">SOFTWARE STACK</h1>
                    <p className="text-[#9197a4] mt-8 text-sm">Python</p>
                    <p className="text-[#9197a4] mt-3 text-sm">ReactJS, React Native</p>
                    <p className="text-[#9197a4] mt-3 text-sm">HTML, CSS, JavaScript, Tailwind</p>
                </div>
            </div>
        </div>
        </>
     );
}
