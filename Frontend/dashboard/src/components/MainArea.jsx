import { Chart } from "chart.js";
import React from "react";
import DoughnutChart from "./HomeChart";

const MainArea = () => {
  return (
    <div className="flex-1">
        <div class="p-4 sm:ml-64">
            <div class="p-4 border-2 border-gray-200 border rounded-lg dark:border-gray-700 mt-14">
                <div class="grid grid-cols-3 gap-4 mb-4">
                    <div class="justify-center col-span-2">
                        <div className="rounded bg-gray-50 dark:bg-gray-800 h-min border mb-2">
                            <h2 class="text-xl m-2">Multi State Cooperative Societies ACT, 2002</h2>
                            <p class="text-s m-2">The Multi State Cooperative Societies Act 2002 consolidated and amended the law for co-operative societies operating across multiple states. It aimed to promote their democratic functioning, self-help, and mutual aid for economic and social betterment. The act received the President's assent on 3rd July 2002 and became law as The Multi State Cooperative Societies Act 2002 (39 of 2002).</p>
                        </div>
                        <div className="rounded bg-gray-50 dark:bg-gray-800 h-min border my-2">
                            <h2 class="text-xl m-2">Performance Metrics</h2>
                            <div class="flex ">  
                                {/* <table class="border-collapse m-2 border border-slate-400 ...">
                                <thead>
                                    <tr>
                                    <th class="border border-slate-300 ...">State</th>
                                    <th class="border border-slate-300 ...">City</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td class="border border-slate-300 ...">Indiana</td>
                                    <td class="border border-slate-300 ...">Indianapolis</td>
                                    </tr>
                                    <tr>
                                    <td class="border border-slate-300 ...">Ohio</td>
                                    <td class="border border-slate-300 ...">Columbus</td>
                                    </tr>
                                    <tr>
                                    <td class="border border-slate-300 ...">Michigan</td>
                                    <td class="border border-slate-300 ...">Detroit</td>
                                    </tr>
                                </tbody>
                                </table> */}
                                <DoughnutChart></DoughnutChart>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-center bg-gray-50 dark:bg-gray-800 h-screen rounded border">
                    <div className="rounded h-min mb-2">
                        <h2 class="text-xl m-2 w-auto">Content</h2>
                        <ul class="items-center w-full text-xs font-medium bg-white border  rounded-lg sm:flex">
                            <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                <div class="flex items-center pl-3">
                                    <input id="vue-checkbox-list" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                    <label for="vue-checkbox-list" class="w-full py-3 ml-2 text-xs font-medium text-gray-900 dark:text-gray-300">News/ Events</label>
                                </div>
                            </li>
                            <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                <div class="flex items-center pl-3">
                                    <input id="react-checkbox-list" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                    <label for="react-checkbox-list" class="w-full py-3 ml-2 text-xs font-medium text-gray-900 dark:text-gray-300">Offerings</label>
                                </div>
                            </li>
                            <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                <div class="flex items-center pl-3">
                                    <input id="angular-checkbox-list" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                    <label for="angular-checkbox-list" class="w-full py-3 ml-2 text-xs font-medium text-gray-900 dark:text-gray-300">Certificates</label>
                                </div>
                            </li>
                            <li class="w-full dark:border-gray-600">
                                <div class="flex items-center pl-3">
                                    <input id="laravel-checkbox-list" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                    <label for="laravel-checkbox-list" class="w-full py-3 ml-2 text-xs font-medium text-gray-900 dark:text-gray-300">Order Sheet</label>
                                </div>
                            </li>
                        </ul>

                        {
                            ["Shree Ninaidevi Multi Specialty Cooperative Hospital and Research Center Ltd.,MAHARASHTRA","Global Federation of Natural Farming Cooperative Ltd.,UTTAR PRADESH","Tamil Nadu Multi State Societies Cooperative Housing Federation Ltd.,TAMIL NADU","Mahesh Multi State Cooperative Credit Society Ltd.,MAHARASHTRA",
"Chambal Agriculture Marketing Cooperative Ltd,MADHYA PRADESH",
"Heaven Multi State Agro Cooperative Society Ltd,UTTAR PRADESH"].map((text)=>(
                                <div class="rounded border m-1 bg-white">
                                <p class="text-sm m-2">{text}</p>
                            </div>
                            ))
                            
                        }
                        
                    </div>
                    </div>
                </div>
            </div>
        </div> 
    </div>
  );
};

export default MainArea;