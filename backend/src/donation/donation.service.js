/**
 * 기부 서비스 
 * 
 */

 const DonationRepository = require('./donation.repository');
 const donationRepository = new DonationRepository();

 class DonationService {
    save(userId, price) {

        donationRepository.save(userId, price)

        return {
            statusCode: 201,
            responseBody: {
                message: "success"
            }
        };
    }

    async rank() {

        var rankList = await donationRepository.getRank()

        return {
            statusCode: 200,
            responseBody: {
                rankList
            }
        };
    }
    
 
 }
 
 module.exports = DonationService;