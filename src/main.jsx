import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Copy, Check, Gift, Sparkles, ShieldCheck, Smartphone, ArrowRight, BadgePercent } from 'lucide-react';
import './styles.css';

const codes = [
  { label: 'Code One', value: 'ICTLYNCO', note: 'Copy and paste during signup' },
  { label: 'Code Two', value: 'ZGK29HT3I1', note: 'Alternative promo code option' },
];

function CopyButton({ value }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch (e) {
      const textarea = document.createElement('textarea');
      textarea.value = value;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    }
  };
  return (
    <button className="copyBtn" onClick={copy} aria-label={`${value} copy`}>
      {copied ? <Check size={18} /> : <Copy size={18} />}
      {copied ? 'Copied' : 'Copy code'}
    </button>
  );
}

function App() {
  return (
    <main className="page">
      <section className="hero">
        <div className="eyebrow"><Sparkles size={16}/> IMIN Promotion Code</div>
        <h1>아임인 프로모션 코드</h1>
        <p className="lead">아임인 가입 과정에서 사용할 수 있는 프로모션 코드를 한 곳에 정리했습니다. 앱 설치 후 회원가입 단계에서 아래 코드 중 하나를 입력해보세요.</p>
        <div className="quickTags">
          <span><BadgePercent size={15}/> Promo code</span>
          <span><Smartphone size={15}/> App signup</span>
          <span><ShieldCheck size={15}/> Simple guide</span>
        </div>
      </section>

      <section className="codeGrid" aria-label="IMIN promotion codes">
        {codes.map((code) => (
          <article className="codeCard" key={code.value}>
            <div className="cardTop">
              <span>{code.label}</span>
              <Gift size={20}/>
            </div>
            <strong>{code.value}</strong>
            <p>{code.note}</p>
            <CopyButton value={code.value} />
          </article>
        ))}
      </section>

      <section className="guideBox">
        <div>
          <p className="sectionLabel">How to use</p>
          <h2>아임인 코드 입력 방법</h2>
        </div>
        <ol className="steps">
          <li><span>01</span>아임인 앱을 설치하고 회원가입을 시작합니다.</li>
          <li><span>02</span>가입 화면에서 프로모션 코드 입력란을 확인합니다.</li>
          <li><span>03</span>위 코드 중 하나를 복사해 입력합니다.</li>
          <li><span>04</span>가입을 완료하고 제공되는 혜택을 확인합니다.</li>
        </ol>
      </section>

      <section className="infoPanel">
        <div className="infoText">
          <p className="sectionLabel">Before signup</p>
          <h2>코드는 가입 전에 준비해두세요</h2>
          <p>프로모션 코드는 보통 회원가입 과정에서 입력하는 방식입니다. 앱 화면이나 이벤트 조건에 따라 혜택, 입력 위치, 적용 여부가 달라질 수 있으니 가입 전 최신 안내를 함께 확인하는 것을 권장합니다.</p>
        </div>
        <div className="miniCard">
          <span>Current codes</span>
          <b>2</b>
          <small>ICTLYNCO · ZGK29HT3I1</small>
        </div>
      </section>

      <section className="faq">
        <h2>자주 묻는 질문</h2>
        <details>
          <summary>두 코드 모두 사용해야 하나요?</summary>
          <p>아니요. 가입 단계에서 입력 가능한 코드 하나를 선택해 사용하면 됩니다.</p>
        </details>
        <details>
          <summary>코드가 적용되지 않으면 어떻게 하나요?</summary>
          <p>코드 철자를 다시 확인하고, 앱의 프로모션 입력 조건이나 이벤트 기간을 확인해보세요.</p>
        </details>
        <details>
          <summary>이 페이지의 목적은 무엇인가요?</summary>
          <p>아임인 가입 시 참고할 수 있는 프로모션 코드 정보를 간단하게 정리해 제공하는 페이지입니다.</p>
        </details>
      </section>

      <footer>
        <p>IMIN promo code information page.</p>
        <p className="small">This page is an independent information page and is not an official IMIN website.</p>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
