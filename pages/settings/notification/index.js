import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function NotificationSettings() {
  const { t: t1 } = useTranslation("settings");
  return (
    <>
      <form>
        <div className="NotificationSettings flex justify-center items-center flex-col mx-auto px-6 md:px-12 py-10">
          <h4 className="text-4xl font-bold py-10">
            {t1("content.notification.title")}
          </h4>

          <div className="flex flex-col gap-2 ">
            <h4 className="font-semibold">
              {t1("content.notification.title")}
            </h4>

            <div className="grid grid-flow-row grid-cols-2 py-2">
              <div className=" inline-grid text-sm font-medium dark:text-gray-300">
                <span>{t1("content.notification.smsNotification")}</span>
                <span className="text-gray-400">
                  (RM0.00/SMS) - {t1("content.notification.notice")}
                </span>
              </div>
              <label
                htmlFor="noti_sms"
                class="flex relative items-center mb-4 cursor-pointer place-self-end">
                <input type="checkbox" id="noti_sms" class="sr-only" />
                <div class="w-11 h-6 bg-gray-200 rounded-full border border-gray-200 toggle-bg dark:bg-gray-700 dark:border-gray-600"></div>
              </label>
            </div>

            <div className="grid grid-flow-row grid-cols-2 py-2">
              <div className=" inline-grid text-sm font-medium dark:text-gray-300">
                <span>{t1("content.notification.emailNotification")}</span>
                <span className="text-gray-400">
                  (RM0.00/email) - {t1("content.notification.notice")}
                  price
                </span>
              </div>
              <label
                htmlFor="noti_email"
                class="flex relative items-center mb-4 cursor-pointer place-self-end">
                <input type="checkbox" id="noti_email" class="sr-only" />
                <div class="w-11 h-6 bg-gray-200 rounded-full border border-gray-200 toggle-bg dark:bg-gray-700 dark:border-gray-600"></div>
              </label>
            </div>

            <div className="grid grid-flow-row grid-cols-2 py-2">
              <div className=" inline-grid text-sm font-medium dark:text-gray-300">
                <span>{t1("content.notification.pushNotification")}</span>
                <span className="text-gray-400">
                  (RM0.00/notification) - {t1("content.notification.notice")}
                </span>
              </div>
              <label
                htmlFor="push_noti"
                class="flex relative items-center mb-4 cursor-pointer place-self-end">
                <input type="checkbox" id="push_noti" class="sr-only" />
                <div class="w-11 h-6 bg-gray-200 rounded-full border border-gray-200 toggle-bg dark:bg-gray-700 dark:border-gray-600"></div>
              </label>
            </div>
            <hr class="my-6 w-full " />
            <h4 className="font-semibold">
              {t1("content.notification.receiveNewsletter")}
            </h4>

            <div className="grid grid-flow-row grid-cols-2 py-2">
              <div className=" inline-grid text-sm font-medium dark:text-gray-300">
                <span>{t1("content.notification.notifyOrderStatus")}</span>
              </div>
              <label
                htmlFor="noti_sms"
                class="flex relative items-center mb-4 cursor-pointer place-self-end">
                <input type="checkbox" id="noti_sms" class="sr-only" />
                <div class="w-11 h-6 bg-gray-200 rounded-full border border-gray-200 toggle-bg dark:bg-gray-700 dark:border-gray-600"></div>
              </label>
            </div>

            <div className="grid grid-flow-row grid-cols-2 py-2">
              <div className=" inline-grid text-sm font-medium dark:text-gray-300">
                <span>
                  {t1("content.notification.notifyReceiverOrderStatus")}
                </span>
              </div>
              <label
                htmlFor="noti_email"
                class="flex relative items-center mb-4 cursor-pointer place-self-end">
                <input type="checkbox" id="noti_email" class="sr-only" />
                <div class="w-11 h-6 bg-gray-200 rounded-full border border-gray-200 toggle-bg dark:bg-gray-700 dark:border-gray-600"></div>
              </label>
            </div>

            <div className="grid grid-flow-row grid-cols-2 py-2">
              <div className=" inline-grid text-sm font-medium dark:text-gray-300">
                <span>{t1("content.notification.instabookNotifySender")}</span>
              </div>
              <label
                htmlFor="push_noti"
                class="flex relative items-center mb-4 cursor-pointer place-self-end">
                <input type="checkbox" id="push_noti" class="sr-only" />
                <div class="w-11 h-6 bg-gray-200 rounded-full border border-gray-200 toggle-bg dark:bg-gray-700 dark:border-gray-600"></div>
              </label>
            </div>

            <div className="grid grid-flow-row grid-cols-2 py-2">
              <div className=" inline-grid text-sm font-medium dark:text-gray-300">
                <span>
                  {t1("content.notification.instabookNotifyReceiver")}
                </span>
              </div>
              <label
                htmlFor="push_noti"
                class="flex relative items-center mb-4 cursor-pointer place-self-end">
                <input type="checkbox" id="push_noti" class="sr-only" />
                <div class="w-11 h-6 bg-gray-200 rounded-full border border-gray-200 toggle-bg dark:bg-gray-700 dark:border-gray-600"></div>
              </label>
            </div>

            <div className="grid grid-flow-row grid-cols-2 py-2">
              <div className=" inline-grid text-sm font-medium dark:text-gray-300">
                <span>{t1("content.notification.newInvoice")}</span>
              </div>
              <label
                htmlFor="push_noti"
                class="flex relative items-center mb-4 cursor-pointer place-self-end">
                <input type="checkbox" id="push_noti" class="sr-only" />
                <div class="w-11 h-6 bg-gray-200 rounded-full border border-gray-200 toggle-bg dark:bg-gray-700 dark:border-gray-600"></div>
              </label>
            </div>

            <div className="grid grid-flow-row grid-cols-2 py-2">
              <div className=" inline-grid text-sm font-medium dark:text-gray-300">
                <span>{t1("content.notification.paidInvoice")}</span>
              </div>
              <label
                htmlFor="push_noti"
                class="flex relative items-center mb-4 cursor-pointer place-self-end">
                <input type="checkbox" id="push_noti" class="sr-only" />
                <div class="w-11 h-6 bg-gray-200 rounded-full border border-gray-200 toggle-bg dark:bg-gray-700 dark:border-gray-600"></div>
              </label>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "pageWrapper, settings, notification",
      ])),
    },
  };
}
