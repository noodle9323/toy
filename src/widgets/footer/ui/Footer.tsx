export const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 mt-auto" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">회사 정보</h3>
            <p className="text-gray-600">회사명</p>
            <p className="text-gray-600">주소</p>
          </div>
          <div>
            <h3 className="font-bold mb-4">고객 지원</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">
                  고객센터
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">법적 고지</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">
                  이용약관
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">
                  개인정보처리방침
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">소셜 미디어</h3>
            <div className="flex gap-4">{/* 소셜 미디어 아이콘들 */}</div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-600">
          <p>© 2024 Toy.All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
