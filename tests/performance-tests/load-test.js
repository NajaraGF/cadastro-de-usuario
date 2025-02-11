import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '10s', target: 10 },  // Aumenta de 0 para 10 usuários em 10s
    { duration: '20s', target: 100 }, // Mantém 100 usuários simultâneos por 20s
    { duration: '10s', target: 0 },   // Reduz de 100 para 0 usuários em 10s
  ],
  thresholds: {
    http_req_duration: ['p(95)<500'], // 95% das requisições devem ser < 500ms
    http_req_failed: ['rate<0.01'],  // Menos de 1% das requisições podem falhar
  },
};

export default function () {
  const res = http.get('https://jsonplaceholder.typicode.com/users');

  check(res, {
    'Status code é 200': (r) => r.status === 200,
    'Tempo de resposta menor que 500ms': (r) => r.timings.duration < 500,
  });

  sleep(1);
}

