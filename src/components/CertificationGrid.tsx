"use client";

import Image from "next/image";
import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { BrainCircuit, Cloud, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { certifications, type Certification } from "@/data/profile";

const categories = [
  { id: "all", label: "すべて" },
  { id: "aws", label: "AWS" },
  { id: "it", label: "IT基礎" },
] as const;

const certificationIcons = {
  "aws-clf": Cloud,
  "aws-aif": BrainCircuit,
  "it-passport": ShieldCheck,
};

type CategoryId = (typeof categories)[number]["id"];
type BadgeOverrides = Record<string, string>;

const storageKey = "profile.certificationBadgeOverrides";

function readBadgeOverrides() {
  if (typeof window === "undefined") {
    return {};
  }

  try {
    const value = window.localStorage.getItem(storageKey);
    return value ? (JSON.parse(value) as BadgeOverrides) : {};
  } catch {
    return {};
  }
}

function getBadgeUrl(certification: Certification, overrides: BadgeOverrides) {
  return overrides[certification.id] || certification.badgeImageUrl;
}

export function CertificationGrid() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("all");
  const [badgeOverrides, setBadgeOverrides] = useState<BadgeOverrides>({});
  const [isEditorVisible, setIsEditorVisible] = useState(false);

  useEffect(() => {
    setBadgeOverrides(readBadgeOverrides());
    setIsEditorVisible(new URLSearchParams(window.location.search).get("edit") === "badges");
  }, []);

  const visibleCertifications = useMemo(
    () =>
      activeCategory === "all"
        ? certifications
        : certifications.filter((certification) => certification.category === activeCategory),
    [activeCategory],
  );

  function updateBadgeUrl(certificationId: string, badgeUrl: string) {
    const nextOverrides = {
      ...badgeOverrides,
      [certificationId]: badgeUrl.trim(),
    };

    if (!nextOverrides[certificationId]) {
      delete nextOverrides[certificationId];
    }

    setBadgeOverrides(nextOverrides);
    window.localStorage.setItem(storageKey, JSON.stringify(nextOverrides));
  }

  function handleBadgeUpload(certificationId: string, event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    const reader = new FileReader();
    reader.addEventListener("load", () => {
      if (typeof reader.result === "string") {
        updateBadgeUrl(certificationId, reader.result);
      }
    });
    reader.readAsDataURL(file);
  }

  return (
    <div>
      <div className="flex gap-2 overflow-x-auto rounded-lg border border-slate-700 bg-slate-950/55 p-1">
        {categories.map((category) => (
          <button
            className={cn(
              "min-h-10 rounded-md px-4 text-sm font-bold text-slate-300 transition hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-300",
              activeCategory === category.id && "bg-cyan-300 text-slate-950 hover:text-slate-950",
            )}
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            type="button"
          >
            {category.label}
          </button>
        ))}
      </div>
      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {visibleCertifications.map((certification) => {
          const Icon = certificationIcons[certification.id as keyof typeof certificationIcons];
          const badgeUrl = getBadgeUrl(certification, badgeOverrides);

          return (
            <div
              className="aspect-square rounded-lg border border-slate-700 bg-slate-950/65 p-4 transition hover:border-cyan-300/70 hover:bg-slate-900"
              key={certification.id}
            >
              <div className="flex h-full flex-col items-center justify-center text-center">
                {badgeUrl ? (
                  <Image
                    alt=""
                    aria-hidden="true"
                    className="h-[70%] w-[70%] object-contain"
                    height={256}
                    src={badgeUrl}
                    unoptimized
                    width={256}
                  />
                ) : (
                  <div className="flex h-12 w-12 items-center justify-center rounded-md border border-cyan-300/30 bg-cyan-300/10 text-cyan-200">
                    <Icon aria-hidden="true" className="h-6 w-6" />
                  </div>
                )}
                <p className="mt-4 text-sm font-black leading-5 text-white">
                  {certification.shortName}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      {isEditorVisible ? (
        <div className="mt-6 rounded-lg border border-amber-300/30 bg-amber-300/10 p-4">
          <h4 className="text-base font-bold text-white">資格バッジ編集</h4>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            ここで設定した画像は、このブラウザの表示確認用として保存されます。全ユーザーに反映する場合は、画像を
            <span className="text-slate-100"> public/certifications/ </span>
            に配置し、資格データの badgeImageUrl に指定してください。
          </p>
          <div className="mt-4 grid gap-4">
            {certifications.map((certification) => (
              <div className="rounded-lg border border-slate-700 bg-slate-950/65 p-4" key={certification.id}>
                <label className="text-sm font-bold text-white" htmlFor={`${certification.id}-badge-url`}>
                  {certification.shortName}
                </label>
                <input
                  className="mt-2 w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none focus:border-cyan-300"
                  id={`${certification.id}-badge-url`}
                  onChange={(event) => updateBadgeUrl(certification.id, event.target.value)}
                  placeholder="/certifications/example.png または https://..."
                  type="url"
                  value={badgeOverrides[certification.id] ?? ""}
                />
                <input
                  accept="image/*"
                  className="mt-3 block w-full text-sm text-slate-300 file:mr-3 file:rounded-md file:border-0 file:bg-cyan-300 file:px-3 file:py-2 file:text-sm file:font-bold file:text-slate-950"
                  onChange={(event) => handleBadgeUpload(certification.id, event)}
                  type="file"
                />
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
