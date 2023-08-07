<?php 
namespace App\Service;

use Symfony\Component\Mime\Email;
use Symfony\Component\Mailer\MailerInterface;

class Mailer 
{
    public function __construct(Private MailerInterface $mailer){}

    public function sendMail(
        string $from = "noreply@cours.fr",
        string $to = "xan@cours.fr",
        string $subject = "Message Automatique",
        string $content = "Ne pas répondre à ce message."
    
    ):void
    {
        $email = (new Email())
            ->from($from)
            ->to($to)
            ->subject($subject)
            ->html($content);
        $this->mailer->send($email);
    }
}
?>