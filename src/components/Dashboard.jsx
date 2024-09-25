import React from 'react'

function Dashboard() {
  return (
    <div className="antialiased bg-black w-full min-h-screen text-slate-300 relative py-4">
        <div className="grid grid-cols-12 mx-auto gap-2 sm:gap-4 md:gap-6 lg:gap-10 xl:gap-14 max-w-7xl my-10 px-2">
            <div id="menu" className="bg-white/10 col-span-3 rounded-lg p-4 ">
                <h1 className="font-bold text-lg lg:text-3xl bg-gradient-to-br from-custom-green via-white/50 to-transparent bg-clip-text text-transparent">Farm Mall<span className="text-custom-green">.</span></h1>
                <p className="text-slate-400 text-sm mb-2">Welcome back,</p>
                <a href="#" className="flex flex-col space-y-2 md:space-y-0 md:flex-row mb-5 items-center md:space-x-2 hover:bg-white/10 group transition duration-150 ease-linear rounded-lg group w-full py-3 px-2">
                    <div>
                        <img className="rounded-full w-10 h-10 relative object-cover" src="https://img.freepik.com/free-photo/no-problem-concept-bearded-man-makes-okay-gesture-has-everything-control-all-fine-gesture-wears-spectacles-jumper-poses-against-pink-wall-says-i-got-this-guarantees-something_273609-42817.jpg?w=1800&t=st=1669749937~exp=1669750537~hmac=4c5ab249387d44d91df18065e1e33956daab805bee4638c7fdbf83c73d62f125" alt=""></img>
                    </div>
                    <div>
                        <p className="font-medium group-hover:text-custom-green leading-4">Julia Mumbe</p>
                        <span className="text-xs text-slate-400">Farmmall</span>
                    </div>
                </a>
                <hr className="my-2 border-slate-700"></hr>
                <div id="menu" className="flex flex-col space-y-2 my-5">
                    <a href="#" className="hover:bg-white/10 transition duration-150 ease-linear rounded-lg py-3 px-2 group">
                        <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 space-x-2 items-center">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke="currentColor" className="w-6 h-6 group-hover:text-custom-green">
                                    <path  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                  </svg>
                                  
                            </div>
                            <div>
                                <p className="font-bold text-base lg:text-lg text-slate-200 leading-4 group-hover:text-custom-green">Dashboard</p>
                            <p className="text-slate-400 text-sm hidden md:block">Data overview</p>
                            </div>
                            
                        </div>
                    </a>
                    <a href="#" className="hover:bg-white/10 transition duration-150 ease-linear rounded-lg py-3 px-2 group">
                        <div className="relative flex flex-col space-y-2 md:flex-row md:space-y-0 space-x-2 items-center">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke="currentColor" className="w-6 h-6 group-hover:text-custom-green">
                                    <path  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                  </svg>                              
                            </div>
                            <div>
                                <p className="font-bold text-base lg:text-lg text-slate-200 leading-4 group-hover:text-custom-green">Invoices</p>
                            <p className="text-slate-400 text-sm hidden md:block">Manage invoices</p>
                            </div>
                        </div>
                    </a>
                    <a href="#" className="hover:bg-white/10 transition duration-150 ease-linear rounded-lg py-3 px-2 group">
                        <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 space-x-2 items-center">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke="currentColor" className="w-6 h-6 group-hover:text-custom-green">
                                    <path  d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                                  </svg>                              
                            </div>
                            <div>
                                <p className="font-bold text-base lg:text-lg text-slate-200 leading-4 group-hover:text-custom-green">Users</p>
                            <p className="text-slate-400 text-sm hidden md:block">Manage users</p>
                            </div>
                            
                        </div>
                    </a>
                    <a href="#" className="hover:bg-white/10 transition duration-150 ease-linear rounded-lg py-3 px-2 group">
                        <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 space-x-2 items-center">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke="currentColor" className="w-6 h-6 group-hover:text-custom-green">
                                    <path  d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                                    <path  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                  </svg>
                                    
                            </div>
                            <div>
                                <p className="font-bold text-base lg:text-lg text-slate-200 leading-4 group-hover:text-custom-green">Settings</p>
                            <p className="text-slate-400 text-sm hidden md:block">Edit settings</p>
                            </div>
                            
                        </div>
                    </a>
                </div>
                <p className="text-sm text-center text-gray-600">v1.0 | &copy; 2024 Farm Mall</p>
            </div>
            <div id="content" className="bg-white/10 col-span-9 rounded-lg p-6">
                <div id="24h">
                    <h1 className="font-bold py-4">Timeline estimates</h1>
                    <div id="stats" className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-black/60 to-white/5 p-6 rounded-lg">
                            <div className="flex flex-row space-x-4 items-center">
                                <div id="stats-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke="currentColor" className="w-10 h-10 text-white">
                                        <path  d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                                      </svg>
                                </div>
                                <div>
                                    <p className="text-indigo-300 text-sm font-medium  leading-4">Users</p>
                                    <p className="text-white font-bold text-2xl inline-flex items-center space-x-2">
                                        <span>+28</span>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke="currentColor" className="w-6 h-6">
                                                <path  d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                                              </svg>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="last-incomes">
                    <h1 className="font-bold py-4 ">Last 24h incomes</h1>
                    <div id="stats" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <div className="bg-black/60 to-white/5 rounded-lg">
            <div className="flex flex-row items-center">
                <div className="text-3xl p-4">💰</div>
                <div className="p-2">
                    <p className="text-xl font-bold">28$</p>
                    <p className="text-gray-500 font-medium">Tony Ankel</p>
                    <p className="text-gray-500 text-sm">22 Nov 2022</p>
                </div>
            </div>
            <div className="border-t border-white/5 p-4">
                <a href="#" className="inline-flex space-x-2 items-center text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke="currentColor" className="w-6 h-6">
                        <path  d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                      </svg>
                      <span>Info</span>                                      
                </a>
            </div>
    </div>
                    </div>
                </div>
                <div id="last-users">
                    <h1 className="font-bold py-4 ">Recent updates</h1>
                    <div className="overflow-x-scroll">
                        <table className="w-full whitespace-nowrap">
                            <thead className="bg-black/60">
                                <th className="text-left py-3 px-2 rounded-l-lg">Name</th>
                                <th className="text-left py-3 px-2">Email</th>
                                <th className="text-left py-3 px-2">Group</th>
                                <th className="text-left py-3 px-2">Status</th>
                                <th className="text-left py-3 px-2 rounded-r-lg">Actions</th>
                            </thead>
                            <tr className="border-b border-gray-700">
                                <td className="py-3 px-2 font-bold">
                                    <div className="inline-flex space-x-3 items-center">
                                        <span><img className="rounded-full w-8 h-8" src="https://images.generated.photos/tGiLEDiAbS6NdHAXAjCfpKoW05x2nq70NGmxjxzT5aU/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTM4ODM1LmpwZw.jpg" alt=""></img></span>
                                        <span>Thai Mei</span>
                                    </div>
                                </td>
                                <td className="py-3 px-2">thai.mei@abc.com</td>
                                <td className="py-3 px-2">User</td>
                                <td className="py-3 px-2">Approved</td>
                                <td className="py-3 px-2">
                                    <div className="inline-flex items-center space-x-3">
                                        <a href="" title="Edit" className="hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke="currentColor" className="w-5 h-5">
                                            <path  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                          </svg>
                                          </a>
                                        <a href="" title="Edit password" className="hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke="currentColor" className="w-5 h-5">
                                            <path  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                                          </svg>
                                          </a>
                                        <a href="" title="Suspend user" className="hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke="currentColor" className="w-5 h-5">
                                            <path  d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                                          </svg>
                                          </a>
                                    </div>
                                </td>
                            </tr> 
                        </table>
                    </div>
                </div>
               
            </div>
        </div>
    </div>
  )
}

export default Dashboard
