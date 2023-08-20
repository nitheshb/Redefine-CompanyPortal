import { useState, useEffect, useRef } from 'react'

// import CountUp, { useCountUp } from 'react-countup'
import { CountUp } from '@eeacms/countup'

import { useAuth } from 'src/context/firebase-auth-context'
import { computeTotal } from 'src/util/computeCsTotals'

const CrmUnitCostSheetView = ({ selCustomerPayload, assets, totalIs }) => {
  const { user } = useAuth()
  const { orgId } = user
  const [partATotal, setPartA] = useState(0)
  const [partBTotal, setPartB] = useState(0)
  const [unitTotal, setUnitTotal] = useState(0)

  console.log('payload is ', selCustomerPayload)
  useEffect(() => {
    const a = selCustomerPayload?.plotCS?.reduce(
      (partialSum, obj) => partialSum + Number(obj?.TotalNetSaleValueGsT),
      0
    )
    const b = selCustomerPayload?.addChargesCS?.reduce(
      (partialSum, obj) =>
        partialSum +
        Number(
          computeTotal(
            obj,
            selCustomerPayload?.super_built_up_area || selCustomerPayload?.area
          )
        ),
      0
    )
    setPartA(a)
    setPartB(b)
    setUnitTotal(a + b)
  }, [selCustomerPayload])

  return (
    <>
      <div className="mt-2">
        <section className="mr-2 flex flex-col  ">
          <div>
            <div className="bg-[#00a76f14] bg-gradient-to-r from-red-50 to-stone-50 border border-[#e5e7f8] rounded-md mt-[4px]">
              <div className="flex flex-row  px-3">
                <img
                  src="https://static.ambitionbox.com/static/benefits/WFH.svg"
                  alt=""
                />
                <h1 className="text-bodyLato text-left text-[#1E223C] font-semibold text-[14px] mb-2 mt-3 ml-1">
                  Cost Sheet
                </h1>
              </div>
              <div className="grid  grid-cols-2  gap-x-2  px-3">
                <div className="border-[0.05px] border-gray-300 rounded-md p-[4px]">
                  <h1 className=" mt-2 mb-1 text-bodyLato text-left text-gray-800 font-semibold text-[12px] mb-1">
                    Part (A)
                  </h1>
                  <table className="w-[100%]">
                    <thead>
                      <tr className=" h-6 border-b-[0.2px] border-gray-300 w-[100%]">
                        <th className="min-w-[35%] text-[10px] text-left text-[#00a76f]  tracking-wide uppercase">
                          Particulars
                        </th>
                        <th className="w-[15%] text-[10px] text-right text-[#00a76f] tracking-wide uppercase">
                          Plot Rate/Sqft
                        </th>
                        <th className="w-[15%] text-[10px] text-right text-[#00a76f] tracking-wide uppercase">
                          Sale Value
                        </th>
                        <th className="w-[15%] text-[10px] text-right text-[#00a76f]  tracking-wide uppercase">
                          GST
                        </th>
                        <th className="w-[15%] text-[10px] text-right text-[#00a76f]  tracking-wide uppercase ">
                          Total
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {' '}
                      {selCustomerPayload?.plotCS?.map((d1, inx) => (
                        <tr
                          key={inx}
                          className="border-b-[0.05px] border-gray-300"
                        >
                          <th className="w-[40%] text-[10px] text-left text-gray-700  ">
                            {d1?.component?.label}
                          </th>

                          <td className="w-[15%] text-[10px] text-right text-gray-700 ">
                            ₹{d1?.charges?.toLocaleString('en-IN')}
                          </td>
                          <td className="w-[15%] text-[10px] text-right text-gray-700 ">
                            ₹{d1?.TotalSaleValue?.toLocaleString('en-IN')}
                          </td>
                          <td className="w-[15%] text-[10px] text-right text-gray-700 ">
                            ₹{d1?.gst?.value?.toLocaleString('en-IN')}
                          </td>
                          <td className="w-[15%] text-[10px] text-right text-gray-800 ">
                            ₹{' '}
                            {d1?.TotalNetSaleValueGsT?.toLocaleString('en-IN')}
                          </td>
                        </tr>
                      ))}
                      <tr className="border-b-[0.05px] border-gray-300">
                        <th className="w-[40%] text-[10px] text-left text-gray-800 ">
                          Total (A)
                        </th>
                        <td className="w-[15%] font-bold text-[10px] text-right text-gray-800 "></td>
                        <td className="w-[15%] font-bold  text-[10px] text-right text-gray-800 "></td>
                        <td className="w-[15%] font-bold  text-[10px] text-right text-gray-800 "></td>
                        <td className="w-[15%] font-bold  text-[10px] text-right text-gray-800 ">
                          {partATotal?.toLocaleString('en-IN')}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="border-[0.05px] border-gray-300 rounded-md p-[4px]">
                  <h1 className=" mt-2 mb-1 text-bodyLato text-left text-gray-800 font-semibold text-[12px] mb-1">
                    Other Charges (B)
                  </h1>
                  <table className="w-full">
                    <thead>
                      {' '}
                      <tr className=" h-6  border-b-[0.2px] border-gray-300">
                        <th className="w-[40%] text-[10px] text-left text-gray-700 text-[#00a76f]  tracking-wide uppercase ">
                          Particulars
                        </th>
                        <th className="w-[30%] text-[10px] text-right text-gray-700 text-[#00a76f]  tracking-wide uppercase ">
                          Timeline
                        </th>
                        <th className="w-[15%] text-[10px] text-right text-gray-700  text-[#00a76f] tracking-wide uppercase">
                          Rate
                        </th>
                        <th className="w-[20%] text-[10px] text-right text-gray-700  text-[#00a76f] tracking-wide uppercase">
                          Total Inc GST
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {selCustomerPayload?.addChargesCS?.map((d1, inx) => (
                        <tr
                          key={inx}
                          className="border-b-[0.05px] border-gray-300"
                        >
                          <th className=" text-[10px] text-left text-gray-700 ">
                            {d1?.component?.label} (0.05% Plot Sale)
                          </th>
                          <td className="text-[10px] text-right text-gray-700 ">
                            {d1?.description}
                          </td>
                          <td className="text-[10px] text-right text-gray-700 ">
                            ₹{Number(d1?.charges)?.toLocaleString('en-IN')}
                          </td>
                          <td className="text-[10px] text-right text-gray-700 ">
                            ₹{' '}
                            {Number(
                              computeTotal(d1, selCustomerPayload?.area)
                            )?.toLocaleString('en-IN')}
                          </td>
                        </tr>
                      ))}
                      <tr className="border-b-[0.05px] border-gray-300">
                        <th className="text-[10px] text-left text-gray-700 "></th>
                        <td className="text-[10px] text-right text-gray-400 "></td>
                        <td className="text-[10px] text-right text-gray-800 font-bold  ">
                          Total (B) :
                        </td>
                        <td className="text-[10px] text-right text-gray-800 font-bold ">
                          ₹{partBTotal?.toLocaleString('en-IN')}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <section className="flex flex-row justify-between mt- rounded px-3">
                <h1 className=" mt-2 text-bodyLato text-left text-gray-800 font-semibold text-[12px] mb-2">
                  Total Plot Sale Value(A+B): ₹{' '}
                  {unitTotal?.toLocaleString('en-IN')}
                </h1>
                <section className="flex flex-row mt-2">
                  <section className="px-2 d-md font-bold text-[12px] text-[#0000008c] ">
                    ₹{partATotal?.toLocaleString('en-IN')}
                  </section>
                  <section className=" d-md font-bold text-[12px] text-[#0000008c] ">
                    +
                  </section>

                  <section className="px-2 d-md font-bold text-[12px] text-[#0000008c] ">
                    ₹{partBTotal?.toLocaleString('en-IN')}
                  </section>
                  <section className=" d-md font-bold text-[12px] text-[#0000008c] ">
                    =
                  </section>
                  <section className="px-2 d-md font-bold text-[16px] text-[#000000e6] leading-none">
                    ₹{unitTotal?.toLocaleString('en-IN')}
                  </section>
                </section>
              </section>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default CrmUnitCostSheetView
